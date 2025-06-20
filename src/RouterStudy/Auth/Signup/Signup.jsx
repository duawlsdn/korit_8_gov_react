
/** @jsxImportSource @emotion/react */
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from 'react-icons/md';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import * as s from './styles';
import { useEffect, useState } from 'react';

// 유효성 감사(Vaidation Check)
function Signup(props) {
    
    const [ inputState, setInputState ] = useState({
        username: {
            value: "",
            message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
            regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
            status: "idle", //success(성공), error(오류), idle(초기 대기상태)
        },
        password: {
            value: "",
            message: "비밀번호는 8~20자이며, 영문·숫자·특수문자를 모두 포함해야 합니다.",
            regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,20}$/,
            status: "idle",
        },
        checkPassword: {
            value: "",
            message: "비밀번호가 서로 일치하지 않습니다.",
            status: "idle",
        },
        fullName: {
            value: "",
            message: "이름은 한글 2~20자여야 합니다.",
            regex: /^[가-힣]{2,20}$/,
            status: "idle",
        },
        email: {
            value: "",
            message: "유효하지 않은 이메일 형식입니다.",
            regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            status: "idle",
        }
    });

    const [ showPassword, setShowPassword ] = useState(false);
    const [ submitDisabled, setSubmitDisabled ] = useState(true);

    const handleOnChange = (e) => {
        setInputState(prev => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                value: e.target.value,
            }
        }));
    }

    const handleOnBlur = (e) => {
        if (!/^.+$/.test(inputState[e.target.name].value)) {
            setInputState(prev => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                status: "idle",
            }
        }));
            return;
        }
        if (e.target.name === "checkPassword"){
            if (inputState.password.status === "success") {
                setInputState(prev => ({
                    ...prev,
                    checkPassword : {
                        ...prev["checkPassword"],
                        status: prev["checkPassword"].value === prev["password"].value ? "success" : "error",
                    }
                }));
            }
            return;
        }

        setInputState(prev => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                status: prev[e.target.name].regex.test(prev[e.target.name].value) ? "success" : "error",
            }
        }));
    }

    useEffect(() => {
        setSubmitDisabled(!!Object.values(inputState).map(obj => obj.status).find(status => status !== "success"));
    }, [inputState]);

    return (
        <div css={s.layout}>
            <h1 css={s.title}>회원가입</h1>
            <div css={s.container}>

                {/* username */}
                <div css={s.inputItem}>
                    <div css={s.inputContainer(inputState.username.status)}>
                        <input type="text" name='username' placeholder='사용자이름' value={inputState.username.value} onChange={handleOnChange} onBlur={handleOnBlur}/>
                        <div>
                            {
                                inputState.username.status !== "idle" 
                                && (
                                    inputState.username.status === "success" 
                                    ? <MdOutlineCheckCircle /> 
                                    : <MdOutlineErrorOutline />
                                )
                            }
                        </div>
                    </div>
                    {
                        inputState.username.status === "error" && 
                        <div css={s.messageContainer()}>{inputState.username.message}</div>
                    }
                </div>

                {/* password */}
                <div css={s.inputItem}>
                    <div css={s.inputContainer(inputState.password.status)}>
                        <input type={showPassword ? "text" : "password"} name='password' placeholder='비밀번호' value={inputState.password.value} onChange={handleOnChange} onBlur={handleOnBlur}/>
                        <p onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <IoEyeOff /> : <IoEye />}</p>
                        {
                            inputState.password.status !== "idle" 
                            && (
                                inputState.password.status === "success" 
                                ? <div><MdOutlineCheckCircle /></div> 
                                : <div><MdOutlineErrorOutline /></div>
                            )
                        }
                    </div>
                    {
                        inputState.password.status === "error" && 
                        <div css={s.messageContainer()}>{inputState.password.message}</div>
                    }
                </div>

                {/* checkPassword */}
                <div css={s.inputItem}>
                    <div css={s.inputContainer(inputState.checkPassword.status)}>
                        <input type={showPassword ? "text" : "password"} name='checkPassword' placeholder='비밀번호 확인' value={inputState.checkPassword.value} onChange={handleOnChange} onBlur={handleOnBlur}/>
                        <div>
                            {
                                inputState.checkPassword.status !== "idle" 
                                && (
                                    inputState.checkPassword.status === "success" 
                                    ? <MdOutlineCheckCircle /> 
                                    : <MdOutlineErrorOutline />
                                )
                            }
                        </div>
                    </div>
                    {
                        inputState.checkPassword.status === "error" && 
                        <div css={s.messageContainer()}>{inputState.checkPassword.message}</div>
                    }
                </div>

                {/* fullName */}
                <div css={s.inputItem}>
                    <div css={s.inputContainer(inputState.fullName.status)}>
                        <input type="text" name='fullName' placeholder='이름' value={inputState.fullName.value} onChange={handleOnChange} onBlur={handleOnBlur}/>
                        <div>
                            {
                                inputState.fullName.status !== "idle" 
                                && (
                                    inputState.fullName.status === "success" 
                                    ? <MdOutlineCheckCircle /> 
                                    : <MdOutlineErrorOutline />
                                )
                            }
                        </div>
                    </div>
                    {
                        inputState.fullName.status === "error" && 
                        <div css={s.messageContainer()}>{inputState.fullName.message}</div>
                    }
                </div>

                {/* email */}
                <div css={s.inputItem}>
                    <div css={s.inputContainer(inputState.email.status)}>
                        <input type="text" name='email' placeholder='이메일' value={inputState.email.value} onChange={handleOnChange} onBlur={handleOnBlur}/>
                        <div>
                            {
                                inputState.email.status !== "idle" 
                                && (
                                    inputState.email.status === "success" 
                                    ? <MdOutlineCheckCircle /> 
                                    : <MdOutlineErrorOutline />
                                )
                            }
                        </div>
                    </div>
                    {
                        inputState.email.status === "error" && 
                        <div css={s.messageContainer()}>{inputState.email.message}</div>
                    }
                </div>
            </div>
            <button css={s.submitButton} disabled={submitDisabled}>가입하기</button>
        </div>
    );
}

export default Signup;

/**
 * username, password, checkpassword, fullname(한글), email 
 * javascript 정규표현식을 각각 만들어주고 error메세지도 만들어줘
 */