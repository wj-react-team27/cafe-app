import { styled } from "styled-components";
import Header from "components/Header";

const TopContainer = styled.div`
  width: 320px;
  height: 181px;
  background-color: #d9d9d9;
  border-radius: 0 0 10px 10px;
  position: relative;
`;

const BottomContainer = styled.div`
  width: 280px;
  height: 350px;
  background-color: #f8f8f8;
  border-radius: 10px;
  position: relative;
  bottom: 55px;
  left: 19px;
`;

const TableContainer = styled.div`
  padding: 30px;

  > div:nth-child(3) {
    margin: 25px 0;
  }
  :nth-child(2) > :nth-child(-n + 2),
  :nth-child(3) > :nth-child(n + 3):nth-child(-n + 4) {
    background-color: #30a2ff;
  }
`;
const TableRow = styled.div`
  display: flex;

  > div:nth-child(2) {
    margin-right: 20px;
  }
`;

const TableCell = styled.div`
  width: 42px;
  height: 39px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin: 5px;
`;

const TablePage = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <BottomContainer>
        <TableContainer>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableContainer>
      </BottomContainer>
    </div>
  );
};

export default TablePage;
