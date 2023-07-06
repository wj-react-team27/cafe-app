import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import icnArrow01 from "../images/icn-arrow01.svg";
import icnInstagram from "../images/icn-instagram.svg";
import icnLike from "../images/icn-heart.svg";
// import icnLikeFill from "../images/icn-heart__filled.svg";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;
const BtnBack = styled.button`
  border: 0;
  background: none;
  padding: 2px;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;
const Instagram = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url(${icnInstagram}) no-repeat 50% 50%;
  border: none;
`;
const Like = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url(${icnLike}) no-repeat 50% 50%;
  border: none;
`;

const Header = () => {
  const [btnLike, setBtnLike] = useState(false);
  const navigate = useNavigate();

  const btnBack = () => {
    navigate(-1);
  };

  const toggleLike = () => {
    setBtnLike(!btnLike);
    console.log(btnLike);
  };
  return (
    <HeaderContainer>
      <div>
        <BtnBack type="button">
          <img src={icnArrow01} alt="뒤로 가기" onClick={btnBack} />
        </BtnBack>
      </div>
      <Title>카페 여기</Title>
      <div>
        <Instagram type="button" />
        <Like type="button" onClick={toggleLike} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
