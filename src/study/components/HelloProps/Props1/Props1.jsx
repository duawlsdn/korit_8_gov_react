function Props1(props) {
    console.log(props);
    
    // 비구조할당(구조분해)
    const { a , b } = props;
    
    // return <div>
    //     <p>a - {props.a}</p>
    //     <p>b - {props.b}</p>
    // </div>

    return <div>
        <p>a - {a}</p>
        <p>b - {b}</p>
    </div>
}

export default Props1;