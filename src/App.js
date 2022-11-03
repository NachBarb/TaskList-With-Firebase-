import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap"
import firebase from "./Utils/firebase";
import AddTask from "./Components/AddTask/AddTask";
import Task from "./Components/Task/Task";
import { map, size } from "lodash";
import "firebase/compat/firestore";
import "./App.scss";

const db = firebase.firestore(firebase);

function App() {

  const [tasks, setTasks] = useState([]);
  const [relodTasks, setRelodTasks] = useState(false);

  useEffect(() => {
    db.collection("task")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response?.docs, (task) => {
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
      });
    setRelodTasks(false);
  }, [relodTasks]);

  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Lista de tareas con Firebase</h1>
      </div>

      <Row className="todo">
        <Col
          className="todo__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>TASKS</h2>
        </Col>
        <Col
          className="todo__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          {size(tasks) === 0 ? (
            <h3>No hay tareas</h3>
          ) : (
            map(tasks, (task, index) => (
              <Task key={index} task={task} setRelodTasks={setRelodTasks} />
            ))
          )}
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask setRelodTasks={setRelodTasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
