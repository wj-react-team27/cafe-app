import React, { useState } from "react";

const SignPage = () => {
  const signUserForm = {
    id: 0,
    userID: "",
    userPW: "",
  };
  const [userSign, setUserSign] = useState(signUserForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserSign({ ...userSign, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userSign.userID.trim() === "" || userSign.userPW.trim() === "") {
      return alert("내용을 입력하세요");
    }

    //....데이터 넘기는 작업 필요

    setUserSign(signUserForm); // input 초기화;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="userID" value={userSign.userID} onChange={onChange} placeholder="Email" />
        <input type="password" name="userPW" value={userSign.userPW} onChange={onChange} placeholder="Password" />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default SignPage;
