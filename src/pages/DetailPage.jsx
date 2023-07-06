import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import icnLocation from "../images/icn-location.svg";
import icnArrow02 from "../images/icn-arrow02.svg";
import icnTime from "../images/icn-time.svg";
import icnPhone from "../images/icn-phone.svg";
import imgDetail from "../images/img-detail__main.svg";
import Header from "components/Header";

const Wrapper = styled.div``;

const Main = styled.main`
  padding: 0 30px;
`;
const ImgCover = styled.div`
  display: flex;
  padding-bottom: 16px;
`;
const CafeImg = styled.img`
  width: 100%;
  height: 150px;
  background: url(${imgDetail}) no-repeat 50% 50%;
  border-radius: 10px;
`;
const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 27px;
`;
const Address = styled.p`
  padding-left: 13px;
  background: url(${icnLocation}) no-repeat 0 50%;
  color: #8f8f90;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const OpTime = styled.p`
  padding-left: 13px;
  background: url(${icnTime}) no-repeat 0 50%;
  color: #8f8f90;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Phone = styled.p`
  padding-left: 13px;
  background: url(${icnPhone}) no-repeat 0 50%;
  color: #8f8f90;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const BtnLive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 30px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  background: #30a2ff;
  cursor: pointer;
`;
const Menu = styled.div`
  text-align: center;
`;
const MenuTitle = styled.h3`
  text-align: left;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MenuList = styled.p`
  display: flex;
  width: 100%;
  flex: 1 1 50%;
  flex-wrap: wrap;
  color: #8f8f90;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 14px;
  text-align: left;
`;
const MenuDetail = styled.span`
  display: block;
  width: 50%;
  padding-bottom: 9px;
`;
const BtnMore = styled.button`
  margin: 5px auto 0;
  padding-right: 15px;
  color: #8f8f90;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: url(${icnArrow02}) no-repeat 100% 50%;
  border: none;
`;

const DetailPage = ({ cafeId }) => {
  const [btnMore, setBtnMore] = useState(false);
  const navigate = useNavigate();

  const toggleMore = () => {
    setBtnMore(!btnMore);
    console.log(btnMore);
  };

  const btnLive = (event) => {
    event.preventDefault();
    navigate(`/detail/${cafeId}/table`);
  };
  return (
    <Wrapper>
      <Header />
      <Main>
        <ImgCover>
          <CafeImg />
        </ImgCover>
        <Location>
          <div>
            <Address>서울시 마포구 와우산로 ..</Address>
            <OpTime>평일, 토요일 10:00 ~ 22:00</OpTime>
            <Phone>010 - 1234 - 5678</Phone>
          </div>
          <div>
            <BtnLive type="submit" onClick={btnLive}>
              좌석 현황
            </BtnLive>
          </div>
        </Location>
        <Menu>
          <MenuTitle>메뉴</MenuTitle>
          <MenuList>
            <MenuDetail>아메리카노 ----- 1000원</MenuDetail>
            <MenuDetail>아메리카노 ----- 1000원</MenuDetail>
            <MenuDetail>라떼 ----- 1000원</MenuDetail>
            <MenuDetail>아메리카노 ----- 1000원</MenuDetail>
            <MenuDetail>바닐라라떼 ----- 1000원</MenuDetail>
            <MenuDetail>아메리카노 ----- 1000원</MenuDetail>
            <MenuDetail>녹차라떼 ----- 1000원</MenuDetail>
            <MenuDetail>아메리카노 ----- 1000원</MenuDetail>
          </MenuList>
          <BtnMore type="button" onClick={toggleMore}>
            더보기
          </BtnMore>
        </Menu>
      </Main>
    </Wrapper>
  );
};

export default DetailPage;
