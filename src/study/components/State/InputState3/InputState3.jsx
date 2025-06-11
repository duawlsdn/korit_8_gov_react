import { useState } from "react"

export default function InputState3 () {
    const studentInputValueEmpty = {
        name: "",
        age: "",
        address: "",
    }

    const [ studentInputValue, setStudentInputValue ] = useState(studentInputValueEmpty);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // # 1
        setStudentInputValue(prev => ({...prev, [name] : value}));

        // # 2 
        // setStudentInputValue(prev => {
        //     return {
        //         ...prev,
        //         [name] : value
        //     }
        // });
        // set((1) => {}) 에서 (1)은 원래의 상태값을 의미하기 때문에 prev(이전값) 이라는뜻
        // prev를 사용하는 이유는 컴포넌트화 했을 시 사용하기 위해 사용.
    }

    return <div>
        <h1>{studentInputValue.name}</h1>
        <h1>{studentInputValue.age}</h1>
        <h1>{studentInputValue.address}</h1>
        <input type="text" name="name" value={studentInputValue.name} onChange={handleOnChange}/>
        <br />
        <input type="text" name="age" value={studentInputValue.age} onChange={handleOnChange}/>
        <br />
        <input type="text" name="address" value={studentInputValue.address} onChange={handleOnChange}/>
        <br />
        <button onClick={() => setStudentInputValue(studentInputValueEmpty)}>리셋</button>
    </div>
}