import React, { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increseCount = () => setCount((count) => count + 1);
    const decreaseConut = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increseCount, decreaseConut];
} // useCounter() 훅은 초기 카운트 값을 매개변수로 받아서 count라는 이름의 state를 생성, 값을 제공하고 카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 훅이다.
// useCounter () 훅으로 어떤 함수 컴포넌트에서든지 카운트 기능을 쉽게 사용할 수 있다.
export default useCounter;