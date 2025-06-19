import React, { useEffect, useState } from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import AuthRouter from './AuthRouter';
import UnAuthRouter from './UnAuthRouter,';
import NotFound from '../NotFound/NotFound';
import RootHeader from '../RootHeader/RootHeader';
import axios from 'axios';
import { useRefreshStore } from '../stores/storeStudy';

/*
    전역 상태 관리
    1. 클라이언트 전역 상태(Zustand, recoil => react 19에서 지원 X)
    2. 서버 전역 상태(ReactQuery)
*/

// 로그인이 되든 안되든 공용적으로 들어갈수 있는 페이지
function MainRouter(props) {
    const [ isLogin, setIsLogin ] = useState(false);
    const { value: isRefresh, setValue: setRefresh } = useRefreshStore();   // 클라이언트 전역 상태
    // const [ refresh, setRefresh ] = useState(true);                      // 일반 useState

    useEffect(() => {
        if (isRefresh) {
            const accessToken = localStorage.getItem("AccessToken");
            if (!!accessToken) {
                axios.get("http://localhost:8080/api/users/login/status", {
                    headers: {
                        // Bearer 란 웹에서 뒤에 나올 값이 accessToken 입니다 라고 명시하는 단어.
                        Authorization: !accessToken ? null : `Bearer ${accessToken}`
                    }
                })
                .then(response => {
                    if (response.data.login) {
                        setIsLogin(true);
                    }
                });
            }
            setRefresh(prev => false);
        }
    },[isRefresh]);

    return (
        <RootLayout>
            <RootHeader isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Routes>
                {/* 상위에서 부터 검사해서 페이지를 들어감
                => 상위 조건에 부합하여 해당 페이지로 들어갈 경우 하위 페이지로 이동되지 않음
                => if문과 유사한 성격이라고 생각하면 좋음 */}
                <Route path='' element={<Home />}/>
                <Route path='/auth/*' element={<AuthRouter />}/>
                <Route path='/users/*' element={<UnAuthRouter />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </RootLayout>
    );
}

export default MainRouter;