export default function fx1() {
    return "fx1입니다.";
}

// export default가 붙은 함수는 그 파일에서 하나만 명시할 수 있기 때문에
// 다른 곳에서 import 할때 이름을 다르게 변경해서 사용 가능

export function fx2() {
    return "fx2입니다."
}

export function fx3() {
    return "fx3입니다."
}

// export 는 함수만 가능하지 않고 변수나 상수도 사용 가능