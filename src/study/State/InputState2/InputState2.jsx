import { useState } from "react"

export default function InputState2 () {
    const [ inputValue, setInputValue ] = useState({
        t1: "",
        t2: "",
        t3: "",
    });

    const handleOnChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;
        
        console.log(`name : ${name}, value: ${value}`);

        const newInputValue = {
            ...inputValue,
            [name] : value,
        }

        setInputValue(newInputValue);

        // 객체 방법 # 1
        // const obj = {
        //     name: "염진우",
        //     age: 30,
        //     ["address"] : "부산진구",   // [] 안 '문자열'로 입력 가능
        // }

        // 객체 방법 # 2
        // const addr = "address";
        // const obj = {
        //     name: "염진우",
        //     age: 30,
        //     [addr] : "부산진구",
        // }

        // 객체 방법 # 3
        // const address = "부산진구";
        // const obj = {
        //     name: "염진우",
        //     age: 30,
        //     ["address"] : address,
        // key 값은 [] 안에 작성 하지만 value 값은 변수명만 사용 가능
        // }

        // const address = "부산진구";
        // const obj = {
        //     name: "염진우",
        //     age: 30,
        //     ["address"] : address,
        //     address : "부산 동래구",
        //     // 뒤에 address를 다시 한번 정의 했기에 앞에 address 를 덮어쓰여진다.
        // }

        // const obj = {
        //     name: "염진우",
        //     age: 30,
        //     ["address"] : address,
        //     address : "부산 동래구",
        // }

        // 얕은 복사
        // const obj2 = obj;

        // 깊은 복사
        // # 1
        // const obj 2 = {
        //     name : obj.name,
        //     age: obj.age,
        //     address: obj.address,
        // }

        // # 2
        // const obj2 = {
        //     ...obj,
        //  스레드 사용 ↑
        //     address: "부산 북구",
        // };
    }


    return <div>
        <input type="text" name="t1" value={inputValue.t1} onChange={handleOnChange}/>
        <input type="text" name="t2" value={inputValue.t2} onChange={handleOnChange}/>
        <input type="text" name="t3" value={inputValue.t3} onChange={handleOnChange}/>

        {/* <input type="text" value={inputValue.t1} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t2} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t3} onChange={(e) => {console.log(e)}}/> */}
    </div>
}