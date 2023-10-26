import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export const Write = () => {
  const [db, setDb] = useState([
    { isModifyMode: false, title: "", content: "" },
  ]);

  const write = () => {
    axios
      .post("http://localhost:8000/insert", {
        title: this.state.title,
        content: this.state.content,
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
        title: this.state.title,
        content: this.state.content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleChange = (e) => {
    setDb({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          onChange={handleChange}
          placeholder="내용을 입력하세요"
        />
      </Form.Group>

      <Button variant="info" onClick={db.isModifyMode ? write : update}>
        작성완료
      </Button>
    </div>
  );
};
