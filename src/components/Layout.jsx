import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: 320px;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <div>
        <Outlet />
      </div>
    </LayoutContainer>
  );
};

export default Layout;
