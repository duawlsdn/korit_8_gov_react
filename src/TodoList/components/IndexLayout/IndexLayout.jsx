/** @jsxImportSource @emotion/react */
import * as s from './styles';
import IndexHeader from '../IndexHeader/IndexHeader';
import React from 'react';

function IndexLayout({children}) {
    return (
        <div css={s.layout}>
            <IndexHeader />
            {children}
        </div>
    );
}

export default IndexLayout;