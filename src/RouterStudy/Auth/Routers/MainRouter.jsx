import React from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import AuthRouter from './AuthRouter';
import UnAuthRouter from './UnAuthRouter,';
import NotFound from '../NotFound/NotFound';
import RootHeader from '../RootHeader/RootHeader';

// 로그인이 되든 안되든 공용적으로 들어갈수 있는 페이지
function MainRouter(props) {
    return (
        <RootLayout>
            <RootHeader />
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