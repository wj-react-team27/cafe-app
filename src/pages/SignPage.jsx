import React, { useState } from "react";
import styled from "styled-components";

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
    <Container>
      <Form onSubmit={onSubmit}>
        <Input type="text" name="userID" value={userSign.userID} onChange={onChange} placeholder="Email" />
        <Input type="password" name="userPW" value={userSign.userPW} onChange={onChange} placeholder="Password" />
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #30a2ff;
  color: white;
  border: none;
  cursor: pointer;
`;

export default SignPage;
