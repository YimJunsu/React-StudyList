import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={styles.wrapper}> 
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>) : (<button onClick={onClickLogin}>로그인</button>)
            }
        </div>
    );
}
// 로그인 여부를 나타내는 isLoggedIn이라는 값을 props로 받아 조건부 렌더링 사용, 환영메시지 표시 혹은 감추가너 버튼 생성
export default Toolbar;