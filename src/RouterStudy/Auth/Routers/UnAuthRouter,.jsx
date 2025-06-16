import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../Signin/Signin';
// import Signup from '../Signup/Signup';
import NotFound from '../NotFound/NotFound';
import ReSignup from '../Signup/ReSignup';

// 로그인이 되지 않아야 들어갈수 있는 페이지
function UnAuthRouter(props) {
    return (
        <Routes>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<ReSignup />}/>
            {/* <Route path='/signup' element={<Signup />}/> */}
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}

export default UnAuthRouter;