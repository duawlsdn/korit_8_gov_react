// useState, useEffect를 활용한 title 변경
import React, { useEffect, useState } from 'react';

function EffectExample(props) {
    const [ inputTitle, setInputTitle ] = useState("");
    const [ sendTitle, setSentTitle ] = useState("");

    const handleChange = (e) => {
        setInputTitle(e.target.value)
    }

    const handleCilck = () => {
        setSentTitle(inputTitle);
    }

    useEffect(() => {
        document.title = sendTitle ? sendTitle : "React App";
    },[sendTitle])

    return (
        <div>
            <input type="text" value={inputTitle} onChange={handleChange}/>
            <button onClick={handleCilck}>확인</button>
        </div>
    );
}

export default EffectExample;