// 매개변수에 들어올때부터 구조분해
// 컴포넌트는 매개변수를 객체 하나만 받을 수 있기 때문에 
// 구조 분해로 2개 이상의 매개변수를 받아 올 수 있게 할 수 있음

function Props2({a, b}) {
    return <div>
        <p>a - {a}</p>
        <p>b - {b}</p>
    </div>
}

export default Props2;