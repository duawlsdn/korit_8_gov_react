function CountButtons({onClick, value, text}) {
    console.log("button");
    return <button onClick={onClick} value={value}>{text}</button>
}

export default CountButtons;