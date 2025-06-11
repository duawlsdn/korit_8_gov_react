import React, { useEffect, useRef, useState } from 'react';
// import fx1, {fx2, fx3} from '../importStudy/functions';
import * as f from '../importStudy/functions';
// * 전체를 의미

function DomRef(props) {
    const [ name, setName ] = useState();
    const inputRef = useRef();
    // document.querySelecte와 유사

    // 마운트, 언마운트 관리
    // 최초한번은 실행
    useEffect(() => {
        // 실행부분이 끝나고 난 뒤에
        console.log("마운트(장착)");
        console.log(inputRef.current.value);
        return () => {
            // 화면에서 사라질때 나타내는 부분
            console.log("언마운트(해제)");
        }

    // 배열 생략 (undefined): 배열을 생략하면, 컴포넌트가 렌더링될 때마다 useEffect가 실행된다.
    // 빈 배열 ([]): 컴포넌트가 처음 마운트될 때만 useEffect가 실행되고, 이후에는 재실행되지 않는다.
    // 특정 값 포함 ([ item ]): 배열에 포함된 값들이 변경될 때만 useEffect가 실행된다.
    })
    console.log("렌더링2");
    // useEffect 란?
    // 리턴이 되고 난 이후에 실행될 함수 
    
    // fx1();
    f.default();
    // 전체를 뜻하는 f내에 특정 함수를 불러온다.

    return (
        <div>
            <input type="text" ref={inputRef} value={"abc"}/>
        </div>
    );
}

export default DomRef