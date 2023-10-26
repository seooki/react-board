import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const Board = ({ id, title, registerId, registerDate }) => {
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{registerId}</td>
      <td>{registerDate}</td>
    </tr>
  );
};

export const BoardList = () => {
  const [boardList, setBoardList] = useState([]);

  const getList = () => {
    axios
      .get("http://localhost:8000/list")
      .then((res) => {
        const { data } = res;
        setBoardList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>선택</th>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((v) => {
            return (
              <Board
                id={v.BOARD_ID}
                title={v.BOARD_TITLE}
                registerId={v.REGISTER_ID}
                registerDate={v.REGISTER_DATE}
                key={v.BOARD_ID}
              />
            );
          })}
        </tbody>
      </Table>
      <Button variant="info">글쓰기</Button>
      <Button variant="secondary">수정하기</Button>
      <Button variant="danger">삭제하기</Button>
    </div>
  );
};
