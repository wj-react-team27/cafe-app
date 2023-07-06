import SubscribeCard from "components/SubscribeCard";
import { styled } from "styled-components";

const SubscribeContainer = styled.div`
  padding: 30px 25px;

  & > h1 {
    font-size: 20px;
    margin-bottom: 14px;
  }

  & > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > li:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      & > p {
        width: 5px;
        height: 5px;
        background: #eee;
        border-radius: 100%;
      }
    }
  }
`;

const dummyList = [
  {
    cafeid: 1,
    title: "카페 여기",
    isSubscribe: true,
    img: "https://i.namu.wiki/i/GxxkLnR7KuFfTdSsVa0MT9JQ1HEmkkzdZRyjTwiJ4rJxenWrGM7dAVe6QCaj7l4vosb3pEzxnqQHeZIpbFtdUw.webp",
    address: "서울시 마포구 와우산로",
    tags: ["분위기 좋은", "카공"],
  },
  {
    cafeid: 2,
    title: "카페 저기",
    isSubscribe: true,
    img: "https://i.namu.wiki/i/GxxkLnR7KuFfTdSsVa0MT9JQ1HEmkkzdZRyjTwiJ4rJxenWrGM7dAVe6QCaj7l4vosb3pEzxnqQHeZIpbFtdUw.webp",
    address: "서울시 마포구 와우산로",
    tags: ["조용한", "힙한"],
  },
];

const SubscribePage = () => {
  return (
    <SubscribeContainer>
      <h1>구독 리스트</h1>
      <ul>
        {dummyList.map((item) => (
          <SubscribeCard
            key={item.cafeid}
            title={item.title}
            isSubscribe={item.isSubscribe}
            img={item.img}
            address={item.address}
            tags={item.tags}
            cafeId={item.cafeid}
          />
        ))}
        <li>
          <p />
          <p />
          <p />
        </li>
      </ul>
    </SubscribeContainer>
  );
};

export default SubscribePage;
