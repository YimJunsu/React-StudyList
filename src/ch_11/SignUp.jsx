import React, { useState } from "react";

// input 태그와 입력된 값을 저장하기 위한 name 이라는 state
function SingUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                이름 : <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br/>
            <label>
                성별 : <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                    </select>
            </label>
            <button type="submit"> 제출 </button>
        </form>
    );
}
export default SingUp;