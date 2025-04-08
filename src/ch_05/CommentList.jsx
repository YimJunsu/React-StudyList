import React from "react";
import Comment from "./Comment";

const comments = [
    {
      name: "임준수",
      comment: "안녕하세요, 임준수입니다.",
    },  
    {
      name: "홍길동",
      comment: "저는 리액트를 배웁니다.",
    },
    {
      name: "김철수",
      comment: "리액트 어려운것 같아요!",
    },
    {
        name: "강호동",
        comment: "반복학습 중요성!!",
      }
  ];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    ); // Comment 컴포넌트의 props로 입력한 name과 comment 값이 전달
}
export default CommentList;