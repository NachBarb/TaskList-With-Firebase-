import { ReactComponent as Check } from "../../assets/images/check.svg";
import { ReactComponent as Delete } from "../../assets/images/delete.svg";
import firebase from "../../Utils/firebase";
import "firebase/compat/firestore";
import "./Task.scss";

const db = firebase.firestore(firebase);

const Task = (props) => {
    const { task, setRelodTasks } = props;

    const completeTask = () => {
        db.collection("tasks")
            .doc(task.id)
            .update({
                completed: true,
            })
            .then(() => {
                setRelodTasks(true);
            });
    };

    const deleteTask = () => {
        db.collection("tasks")
            .doc(task.id)
            .delete()
            .then(() => {
                setRelodTasks(true);
            });
    };

    return (
        <div className="task">
            <div>
                <Check
                    className={task.completed && "completed"}
                    onClick={completeTask}
                />
            </div>
            <div>{task.name}</div>
            <div>
                <Delete onClick={deleteTask} />
            </div>
        </div>
    );
};

export default Task;