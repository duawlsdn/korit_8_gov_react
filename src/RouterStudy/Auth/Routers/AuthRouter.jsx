import { Route, Routes, useNavigate } from 'react-router-dom';
import Mypage from '../Mypage/Mypage';
import NotFound from '../NotFound/NotFound';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

function Logout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    console.log(2);
    useEffect(() => {
        if (confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem("AccessToken");
            queryClient.invalidateQueries({
                queryKey: ["principalUserQuery"],
            }).then(() => {
                navigate("/");
            });
        } else {
            navigate(-1);
        }
    }, []);

    return (
        <>
        </>
    );
}

// 로그인이 되어야 들어갈수 있는 페이지
function AuthRouter(props) {
    return (
        <Routes>
            <Route path='/mypage' element={<Mypage />}/>
            <Route path='/logout' element={<Logout />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}

export default AuthRouter;