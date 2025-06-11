/*
    Emotion(CSS in JS 라이브러리)
    1. 라이브러리 설치 
        -> npm install @emotion/react

    2. jsx 태그의 css 속성을 활성화 
        -> 주석으로 @jsxImportSource @emotion/react

    3. css 객체 import 
        -> css`` 문자열로 css 작성

    4. 확장프로그램
        -> vscode-styled-components 설치
*/

/** @jsxImportSource @emotion/react */  // => 2번 사항
import { css } from '@emotion/react';   // => 3번 사항
import React from 'react';

const box1 = css`                       // => 3번 사항(변수로 가능)
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: white;
`;

const box2 = (color) => css`            // => 3번 사항(함수로도 가능)
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${color};         // => 매개변수로 color를 받음
`;

function Emotion(props) {
    return (
        <div>
            <div css={box1}></div>
            <div css={box2("black")}></div>
        </div>
    );
}

export default Emotion;