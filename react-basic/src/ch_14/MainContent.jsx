import ThemeContext from "./ThemeContext";
import { useContext } from "react";

//ThemeContext로 부터 현재 설정된 테마 값을 받아와 실제 화면의 콘텐츠를 렌더링 하는 역할
function MainContent(props){
    const [ theme, toggleTheme ] = useContext(ThemeContext);
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                background: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    ); // 버튼 클릭시 함수 호출, ThemeContext 값 변경, 
}
export default MainContent;