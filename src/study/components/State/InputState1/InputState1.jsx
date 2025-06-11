import { useState } from "react"

export default function InputState1() {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [ok1, setOk1] = useState("");
    const [ok2, setOk2] = useState("");

    console.log("렌더링");

    const handleOnChange1 = (e) => {
        console.log(e);
        setInputValue1(e.target.value);
    }
    const handleOnChange2 = (e) => {
        console.log(e);
        setInputValue2(e.target.value);
    }

    const handleOnCilck = () => {
        setOk1(inputValue1);
        setOk2(inputValue2);
    }


    return <div>
        <h1>{ok1}</h1>
        <h1>{ok2}</h1>
        <hr />
        <div>
            <input type="text" value={inputValue1} onChange={handleOnChange1}/>
            <input type="text" value={inputValue2} onChange={handleOnChange2}/>
        </div>
        <button onClick={handleOnCilck}>확인</button>
    </div>
}