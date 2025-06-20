// preferences -> configusre sinppets -> javascript.json 내에 작성!
// base 틀
// export const useStore = create((set) => ({
// value: true,
// setValue: (callback) => set(state => ({value: callback(state)})),
// }));

// 원본
// export const useRefreshStore = create((set) => ({
//     isRefresh: true,
//     refresh: () => set(state => ({isRefresh: true})),
//     reset: () => set(state => ({isRefresh: false})),
// }));
import { create } from "zustand";

export const useRefreshStore = create((set) => ({
value: true,
setValue: (callback) => set(state => ({value: callback(state)})),
}));


// export const useGlobalSateStore = create((set) => ({}))    // 객체를 리턴하는 함수
export const useGlobalSateStore = create((set) => ({
    name: "염진우",
    setName: (newName) => set(state => ({name: newName})),
    setName2: () => set(state => ({name: state.name + "님"}))
}));

// useStore() 전역상태 사용
// useStore() 파일을 정의 및 생성
// import { create } from "zustand";

// export const useRefreshStore = create((1. set) => ({
// 2.value: true,
// setValue: (callback) => set(2.1state => ({3.value: callback(state)})),
// }));

// 1. setter 함수 정의
// 2. , 2.1 2. 의 값이 2.1에 기존 상태 값으로 반영
// 3. value의 값이 callback함수의(매개변수) 값을 반아 변환

// export const useGlobalSateStore = create((set) => ({
//     name: "염진우",
// 4.    setName: (newName) => set(state => ({name: newName})),
// 5.    setName2: () => set(state => ({name: state.name + "님"}))
// }));

// 4. 기존의 name 이라는 상태 의 값에 newName 이라는 새로운 상태의 값을 넣는다
// 5. 기존의 name 의 상태(state.name) 에 + "님"을 한 결과를 반환한다.
// 5.1 -> 들어오는 매개변수의 값이 없기 때문에 기존의 상태값을 유지하면서 추가한다고 생각하면 될 것같음