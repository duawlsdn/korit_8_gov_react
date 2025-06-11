import { useState } from "react"

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("0");

    const getResult = () => {
        // 각 plus, minus 가 있는 인덱스를 기준으로 부분적으로 나누는 방법
        let inputText = input;
        let plusNums = [];
        let minusNums = [];
        let lastCalc = "";

        const plusIndex = inputText.indexOf("+");
        const minusIndex = inputText.indexOf("-");

        if(plusIndex === -1 && minusIndex === -1) {
            return;
        }

        if(plusIndex < 0) {
            const numText = inputText.substring(0, minusIndex);
            const restNumText = inputText.substring(minusIndex +  1);
        }

        if(minusIndex < 0) {
            const numText = inputText.substring(0, plusIndex);
            const restNumText = inputText.substring(plusIndex +  1);
        }

        if(plusIndex < minusIndex) {
            const numText = inputText.substring(0, plusIndex);
            const restNumText = inputText.substring(plusIndex +  1);
        } else {
            const numText = inputText.substring(0, minusIndex);
            const restNumText = inputText.substring(minusIndex +  1);
        }

        console.log(plusIndex);
        console.log(minusIndex);
    }

    const handleInputOnClick = (e) => {
        if(e.target.value === "="){
            getResult();
            // setResult(eval(input));
            // setInput("0");
            return;
        }
        if(input === "0"){
            setInput(e.target.value);
        } else {
            setInput(input + e.target.value);
        }
    }

    

    return <div>
        <h1>입력 : {input}</h1>
        <h1>결과 : {result}</h1>
        <div>
            <button onClick={handleInputOnClick} value={0}>0</button>
        </div>
        <div>
            <button onClick={handleInputOnClick} value={1}>1</button>
            <button onClick={handleInputOnClick} value={2}>2</button>
            <button onClick={handleInputOnClick} value={3}>3</button>
        </div>
        <div>
            <button onClick={handleInputOnClick} value={4}>4</button>
            <button onClick={handleInputOnClick} value={5}>5</button>
            <button onClick={handleInputOnClick} value={6}>6</button>
        </div>
        <div>
            <button onClick={handleInputOnClick} value={7}>7</button>
            <button onClick={handleInputOnClick} value={8}>8</button>
            <button onClick={handleInputOnClick} value={9}>9</button>
        </div>
        <div>
            <button onClick={handleInputOnClick} value={"+"}>+</button>
            <button onClick={handleInputOnClick} value={"-"}>-</button>
            <button onClick={handleInputOnClick} value={"="}>=</button>
        </div>
    </div>
}