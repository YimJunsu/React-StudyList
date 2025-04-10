import React from "react";

// 클래스 컴포넌트
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false, // 확인 여부를 저장하기 위해 state에 isConfirmend 라는 변수, 초깃값 false
        };
        // 이벤트 핸들러를 클래스 필드 문법 사용하여 변경
        //this.handleConfirm = this.handleConfirm.bind(this);
        // arrow function 사용하여 이벤트 핸들러 수정 
    }
    // handleConfirm(){
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    render(){ // 버튼 클릭시 이벤트 핸들러 함수, bind() 사용 하는 방식 처리
        return (
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>{this.state.isConfirmed ? "확인됨" : "확인하기"}</button>
        );
    }
}
export default ConfirmButton;

/*
// 함수 컴포넌트 
import React, { useState } from "react";

function fxConfirmButton(props) {
    const [isConfirmed, isConfirmend] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((preIsConfirmed) => !preIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}
export default fxConfirmButton */