/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const style = (p1, p2) => css`
    display: flex;
    box-sizing: border-box;
    border-radius: 8%;
    border: 5px solid ${p2 ? "green" :  "#000"};
    width: 200px;
    height: 200px;
    background-color: ${p1 ? "#5f5f5f" : "#201f1f"};
`;

function Effect2(props) {
    const [ flag, setFlag ] = useState(false);

    const handleOnCilck = () => {
        setFlag(prev => !prev);
    }

    return (
        <div>
            <div css={style(flag, !flag)}></div>
            <button onClick={handleOnCilck}>변경</button>
        </div>
    );
}

export default Effect2;