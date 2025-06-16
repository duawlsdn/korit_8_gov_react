/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from 'react-icons/md';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useEffect, useState } from 'react';

function useSignInAndUpInput({type, name, placeholder, value, valid}) {
    const STATUS = {
        idle: "idle",
        success: "success",
        error: "error",
    };

    const [ inputValue, setInputValue ] = useState(value);
    const [ status, setStatus ] = useState(STATUS.idle);

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnBlur = (e) => {
        if(isEmpty(e.target.value)) {
            setStatus(STATUS.idle);
            return;
        }
        if(valid.enabled) {
            setStatus(valid.regex.test(e.target.value) ? STATUS.success : STATUS.error);
        }
    }

    const isEmpty = (str) => {
        return /^.+$/.test(str);
    }

    return {
        inputValue,
        element: <SignInAndUpInput 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            status={status}
            message={valid.defaultMessage} />
    }
}

function SignInAndUpInput({type, name, placeholder, value, onChange, onBlur, status, message}) {

    return(
        <div css={s.inputItem}>
            <div css={s.inputContainer(status)}>
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
                {
                    status !== "idle" 
                    && (
                        status === "success" 
                        ? <div><MdOutlineCheckCircle /></div> 
                        : <div><MdOutlineErrorOutline /></div>
                    )
                }
            </div>
            <InputValidatedMessage status={status} message={message}/>
        </div>
    );
}

function PasswordInputHiddenButton() {
    const [ isShow, setShow ] = useState(false);

    const handleOnClick = (e) => {
        setShow(prev => !prev);
    }

    return <p onClick={handleOnClick}>{isShow ? <IoEyeOff /> : <IoEye />}</p>
}

function useInputValidatedMessage({defaultMessage}) {
    const STATUS = {
        idle: "idle",
        success: "success",
        error: "error",
    }
    const [ status, setStatus ] = useState(STATUS.idle);
    const [ message, setMessage ] = useState(defaultMessage || "");

    return {
        status,
        setStatus,
        message,
        setMessage,
        element: <InputValidatedMessage status={status} message={message}/>
    }
}

function InputValidatedMessage({status, message}) {
    const ERROR = "error";

    if (status === ERROR) {
        return <div css={s.messageContainer()}>{message}</div>
    } else {
        return <></>
    }
}

function ReSignup(props) {
    const [ submitDisabled, setSubmitDisabled ] = useState(true);
    const [ Inputs, setInputs ] = useState([
        {
            type: "text",
            name: "username",
            placeholder: "사용자 이름",
            value: "",
            valid: {
                enabled: true,
                regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
                message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
            },
        },
        {
            type: "password",
            name: "password",
            placeholder: "비밀번호",
            value: "",
            valid: {
                enabled: true,
                regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,20}$/,
                message: "비밀번호는 8~20자이며, 영문·숫자·특수문자를 모두 포함해야 합니다.",
            },
        },
        {
            type: "password",
            name: "checkPassword",
            placeholder: "비밀번호 확인",
            value: "",
            valid: {
                enabled: false,
                regex: null,
                message: "비밀번호가 서로 일치하지 않습니다.",
            },
        },
    ]);

    const inputItems = Inputs.map(input => useSignInAndUpInput(input));

    useEffect(() => {
        setSubmitDisabled(!!Object.values(inputState).map(obj => obj.status).find(status => status !== "success"));
    }, [inputState]);
        
    return (
        <div css={s.layout}>
            <h1 css={s.title}>회원가입</h1>
            <div css={s.container}>
                {
                    inputItems.map(inputItem => inputItem.element)
                }
            </div>
            <button css={s.submitButton} disabled={submitDisabled}>가입하기</button>
        </div>
    );
}


export default ReSignup;