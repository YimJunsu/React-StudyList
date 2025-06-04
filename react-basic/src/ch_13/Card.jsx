// 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트, Containment와 Specialization, 이 두 가지 합성 방법을 모두 사용하여 구현
// children을 사용한 부분이 Containment이고, title과 background를 사용한 부분이 Specialization

// 해당 컴포넌트는 재사용이 가능,
function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}
export default Card;