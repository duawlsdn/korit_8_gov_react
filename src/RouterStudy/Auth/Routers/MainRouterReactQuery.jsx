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
import { useQuery } from '@tanstack/react-query';

/*
    전역 상태 관리
    1. 클라이언트 전역 상태(Zustand, recoil => react 19에서 지원 X)
    2. 서버 전역 상태(ReactQuery)
*/

// 로그인이 되든 안되든 공용적으로 들어갈수 있는 페이지
function MainRouterReactQuery(props) {

    const principalUserQuery = useQuery({   // 서버 전역 상태 = Hook 함수
        queryKey: ["principalUserQuery"],
        queryFn: async () => {
            const accessToken = localStorage.getItem("AccessToken");
            return await axios.get("http://localhost:8080/api/users/principal", {
                headers: {
                    Authorization: !accessToken ? null : `Bearer ${accessToken}`,
                }
            });
        },
    });

    console.log(principalUserQuery.isLoading);
    console.log(principalUserQuery.data);

    return (
        <>
            {
                !principalUserQuery.isLoading && 
                <RootLayout>
                    <RootHeader />
                    <Routes>
                        <Route path='' element={<Home />}/>
                        <Route path='/auth/*' element={<AuthRouter />}/>
                        <Route path='/users/*' element={<UnAuthRouter />}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </RootLayout>
            }
        </>
    );
}

export default MainRouterReactQuery;