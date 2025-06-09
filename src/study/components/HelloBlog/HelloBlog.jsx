import Post1 from "./PostProps1/Post1";
import Post2 from "./PostProps2/Post2";
import Post3 from "./PostProps3/Post3";
import Post4 from "./PostProps4/Post4";

// function HelloBlog() {

//     return <div>
//         <h3>📝 블로그 게시글</h3>
//         <hr />
//         <Post1 title={"React란 무엇인가?"} content={"React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다."}/>
//         <Post2 title={"Props란?"} content={"Props는 컴포넌트 간 데이터를 전달하기 위한 방법입니다."}/>
//         <Post3 title={"children이란?"} content={"children은 컴포넌트의 여는 태그와 닫는 태그 사이에 작성된 내용을 의미합니다."}/>
//         <Post4 title={"React Hook함수란?"}>
//             <p>Hooks는 함수형 컴포넌트에서 상태를 관리할 수 있게 해줍니다.</p>
//         </Post4>
//     </div>
// }

// export default HelloBlog;

// 수정
// 동일한 패턴이 반복된다면 여러 파일을 생성이 아닌 컴포넌트화 해서 하나의 함수를 재사용.
function HelloBlog() {

    return <div>
        <h3>📝 블로그 게시글</h3>
        <hr />
        <Post1 title={"React란 무엇인가?"} content={"React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다."}/>
        <Post1 title={"Props란?"} content={"Props는 컴포넌트 간 데이터를 전달하기 위한 방법입니다."}/>
        <Post1 title={"children이란?"} content={"children은 컴포넌트의 여는 태그와 닫는 태그 사이에 작성된 내용을 의미합니다."}/>
        <Post4 title={"React Hook함수란?"}>
            <p>Hooks는 함수형 컴포넌트에서 상태를 관리할 수 있게 해줍니다.</p>
        </Post4>
    </div>
}

export default HelloBlog;