/** @jsxImportSource @emotion/react */
import * as s from './styles';
import React from 'react';

function Emotion2(props) {
    return (
        <div>
            <div css={s.box1}></div>
            <div css={s.box2("black")}></div>
        </div>
    );
}

export default Emotion2;