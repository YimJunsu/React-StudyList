import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseConut] = useCounter(0);

    useEffect(()=> {
        console.log("==============");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(()=> {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
                <button onClick={increaseCount} disabled={isFull}>입장</button>
                <button onClick={decreaseConut}>퇴장</button>

                {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>} 
        </div> //카운트 갯수 초과시 경고문구
    )
}
export default Accommodate;
// Accommodate 컴포넌트는 앞에서 만든 훅을 사용하여 카운트 관리, 최대 카운트 10으로 상수 정의, 