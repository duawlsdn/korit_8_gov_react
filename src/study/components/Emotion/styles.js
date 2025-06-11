import { css } from '@emotion/react';

export const box1 = css`
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: white;
`;

export const box2 = (color) => css`
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${color};
`;