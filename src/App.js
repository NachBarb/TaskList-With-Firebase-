import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import AddTask from "./Components/AddTask/AddTask";
import "./App.scss";


function App() {
  return (
    <Container fluid className="app">
      <div className="title">
        <h1 >Nacho Barbisan</h1>
      </div>
      <Row className="todo">
        <Col className="todo_title" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <h2>Today</h2>
        </Col>
        <Col className="todo_list" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <p>Lista de tareas</p>
        </Col>
        <Col className="todo_input" xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <AddTask />
        </Col>
      </Row>


    </Container>
  );
}

export default App;
