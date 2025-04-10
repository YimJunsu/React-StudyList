import React from "react";

const students = [
    {
        id: 1,
        name: "Chulsu",
    },
    {
        id: 2,
        name: "Jane",
    },
    {
        id: 3,
        name: "Mike",
    },
    {
        id: 4,
        name: "Jun",
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student) =>{
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
} // 배열로 부터 정보가 담긴 객체를 받아 학생 이름을 목록 형태로 출력, 렌더링을 위해 map() 함수 사용
// 키 값 없으면 안됨
/*
// 키 값 다른 방식 사용법
// id를 키 값으로 사용
{students.map((student)=> {
    <li key={student.id}>{student.name}</li>;
})}

// 포맷팅 된 문자열을 키값으로 사용
{students.map((student, index)=> {
    <li key={`student-id-${student.id}`}>{student.name}</li>;
})}

// 배열의 인덱스를 키값으로 사용
{students.map((student, index)=>{
    <li key={index}>{student.name}</li>
})}
*/
export default AttendanceBook;