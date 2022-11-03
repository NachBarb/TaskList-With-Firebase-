import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { isEmpty } from 'lodash'
import firebase from "../../Utils/firebase"
import "firebase/compat/firestore";
import { ReactComponent as Send } from "../../assets/images/send.svg"
import "./AddTask.scss"

const db = firebase.firestore(firebase);

const AddTask = (props) => {
    const { setRelodTasks } = props;
    const [task, setTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if (!isEmpty(task)) {
            db.collection("tasks")
                .add({
                    name: task,
                    completed: false,
                })
                .then(() => {
                    setTask("");
                    setRelodTasks(true);
                });
        }
    };
    return (
        <Form onSubmit={addTask} className="add-task">
            <input
                type="text"
                placeholder="Nueva tarea..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button type="submit">
                <Send />
            </Button>
        </Form>
    );
}

export default AddTask