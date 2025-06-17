import { css } from "@emotion/react"

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    box-sizing: border-box;
    padding-bottom: 60px;
`;

export const title = css`
    margin: 10px 0 40px;
    font-size: 30px;
    cursor: default;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 3%;
    padding: 20px;
    width: 350px;
`;

export const inputItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
`;

export const inputContainer = (status) => css`
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 45px;
    background-color: #fafafa;

    & > input {
        box-sizing: border-box;
        border: none;
        outline: none;
        flex-grow: 1;
        height: 100%;
        padding: 0 10px;
        background-color: #fafafa
    }

    & > p {
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 100%;

        & * {
            font-size: 20px;
            color: ${status === "success" ? "#38ba00" : "#f10400"};
        }
    }
`;

export const messageContainer = () => css`
    display: flex;
    justify-content: start;
    box-sizing: border-box;
    padding: 0 5px;
    width: 100%;
    font-size: 12px;
    color: #f10400;
    text-align: left;
    cursor: default;
`;

export const submitButton = css`
    box-sizing: border-box;
    margin-top: 15px;
    border: 1px solid #dbdbdb;
    width: 350px;
    background-color: #4f4f4f;
    color: #fff;
    font-weight: 600;

    &:disabled {
        background-color: #d5d5d5;
        border: none;
        color: #fff;
        font-weight: 600;
        cursor: default;
    }
`;