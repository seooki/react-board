import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

export const Write = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [isModifyMode, setIsModifyMode] = useState(false);

  const write = () => {
    console.log("write 실행");
    axios
      .post("http://localhost:8000/insert", {
        title,
        content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const update = () => {
    axios
      .post("http://localhost:8000/update", {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          onChange={titleChange}
          placeholder="제목을 입력하세요"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          onChange={contentChange}
          placeholder="내용을 입력하세요"
        />
      </Form.Group>

      <Button variant="info" onClick={isModifyMode ? write : write}>
        작성완료
      </Button>
    </div>
  );
};
