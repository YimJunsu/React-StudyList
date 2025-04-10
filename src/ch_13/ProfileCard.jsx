import Card from "./Card";

// Card 컴포넌트 재사용하여 프로필 카드 제작
function ProfileCard(props){
    // children으로 간단한 소개글
    return (
        <Card title="Junsu Yim" backgroundColor="#4ea04e">
            <p>안녕하세요, 준수입니다.</p>
            <p>저는 리액트를 공부하고 있습니다.</p>
        </Card>
    );
}
export default ProfileCard;