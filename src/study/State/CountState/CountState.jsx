import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButtons from "../CountButtons/CountButtons";

function CountState() {
    // useState는 상태값은 항상 유지 된다. set으로 변경하기 전까지
    // 비구조할당으로 인해 배열안에 각각 count 초기상태값과 set함수를 넣는 형태로 표현한다.
    // 지역변수이기 때문에 상위 컴포넌트에 사용이 불가(상위에서 하위로 내리는 형태로 적용)
    const [count, setCount] = useState(10);

    // let count = 0;
    console.log("렌더링");

    // handle 과 On 사이에 어떤 버튼인지에 대한 명시
    const handleOnClick = (e) => {
        console.log(e);
        console.log(e.target.value);
        const num = parseInt(e.target.value);
        console.log(typeof(num));
        // countState[0] += num;
        setCount(count + num);
    }

    return <div>
        <CountHeader count={count}/>
        <CountButtons onClick={handleOnClick} value={1} text={"+1"} />
        <CountButtons onClick={handleOnClick} value={-1} text={"-1"} />
    </div>
}

export default CountState;

