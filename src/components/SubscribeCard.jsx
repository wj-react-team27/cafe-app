import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SubscribeCardContianer = styled.li`
  width: 274px;
  height: 115px;

  & > div {
    display: flex;
    padding: 13px;
    background: #eee;
    border-radius: 10px;

    & > img {
      width: 109px;
      height: 93px;
      border-radius: 10px;
      object-fit: cover;
      cursor: pointer;
    }

    & > div {
      width: 129px;
      margin: 5px 0 0 10px;

      & > div:first-child {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;

        & > span {
          font-size: 14px;
          font-weight: 700;
          line-height: 14px;
          cursor: pointer;
        }
      }

      & > p:nth-child(2) {
        font-size: 10px;
        color: #555;
        margin-bottom: 10px;
      }

      & > div:last-child {
        display: flex;
        gap: 5px;
        font-size: 10px;

        & > span {
          background: #30a2ff;
          color: #fff;
          padding: 3px 6px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;

const Like = styled.span`
  opacity: ${(props) => (props.$isSubscribe ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }
`;

const SubscribeCard = ({ title, isSubscribe, img, address, tags, cafeId }) => {
  const [likeState, setLikeState] = useState(isSubscribe);
  const navigate = useNavigate();

  const handleLickClick = () => {
    navigate(`/detail/${cafeId}`);
  };

  const handleLikeClick = () => {
    setLikeState((prev) => !prev);
  };

  return (
    <SubscribeCardContianer>
      <div>
        <img onClick={handleLickClick} src={img} alt="cafeImg" />
        <div>
          <div>
            <span onClick={handleLickClick}>{title}</span>
            <Like onClick={handleLikeClick} $isSubscribe={likeState}>
              ❤️
            </Like>
          </div>
          <p>{address}</p>
          <div>
            {tags?.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </SubscribeCardContianer>
  );
};

export default SubscribeCard;
