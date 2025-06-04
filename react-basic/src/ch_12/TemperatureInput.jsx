const scaleNames = {
    c: "섭씨",
    f: "화씨",
};
// props로 scale과 temperature 받아서 표시, 
function TemperatureInput(props){
    const handleChange = (event) =>{
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    ); // 온도값이 변경되면 props의 함수 호출
}
export default TemperatureInput;