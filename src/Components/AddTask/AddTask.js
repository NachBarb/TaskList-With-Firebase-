import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { isEmpty } from 'lodash'
import { ReactComponent as Send } from "../../assets/images/send.svg"
import "./AddTask.scss"

const AddTask = () => {
    const [task, SetTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        alert(task);
    }

    return (
        <Form onSubmit={onSubmit} className="add-task">
            <input type="text" placeholder='Nueva tarea ...' onChange={(e) => { SetTask(e.target.value) }} />
            <Button type='submit'>
                <Send />
            </Button>
        </Form>
    )
}

export default AddTask