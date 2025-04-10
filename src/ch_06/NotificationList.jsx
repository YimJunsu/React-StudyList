import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    { // 로그 중복으로 구분이 힘듬 = id 추가
        id: 1,
        message: "안녕하세요, 오늘 일정입니다.",
    },
    {
        id: 2,
        message: "등 + 이두 하는 날입니다!",
    },
    {
        id: 3,
        message: "자바 복습을 해야됩니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            notifications: [], // 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화
        };
    }

    componentDidMount(){ 
        const {notifications} = this.state;
        timer = setInterval(()=> { // 반복문 실행, JS setInterval() 함수로 1000ms(1초) 마다 수행
            if(notifications.length<reservedNotifications.length){
                const index = notifications.length; 
                notifications.push(reservedNotifications[index]); // 배열에 넣는다.
                this.setState({ // 클래스 컴포넌트에서 state 업데이트시 setState() 함수를 쓴다.
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [], // 언마운트 로그를 보기위한, 알림 추가가 끝나면 배열을 비우도록 설정
                });
                clearInterval(timer); // 아니면 삭제
            }
        }, 1000);
    }
    componentWillUnmount(){
        if(timer){
            clearInterval(timer); // 타이머가 존재 할 경우 clearInterval()로 제거, 언마운트 이후엔 타이머 돌아가지 않음
        }
    }
    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                    key={notification.id} // 키 값과 아이디 추가가
                    id={notification.id}
                    message={notification.message} 
                    />;
                })}
            </div>
        );
    }
}

export default NotificationList;
