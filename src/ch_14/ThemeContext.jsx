import React from "react";

// 초기값 별도 설정하지 않음, 개발자 도구 컨텍스트 이름 확인을 위해 이름 설정
const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;