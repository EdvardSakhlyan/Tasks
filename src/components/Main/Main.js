import React from 'react';
import TaskPanel from "../TaskPanel/TaskPanel";
import {useSelector} from "react-redux";
import CustomModal from "../CustomModal/CustomModal";

const Main = () => {

    const {tasks} = useSelector(state => state.taskReducer)

    localStorage.setItem('state' , JSON.stringify(tasks))

    const todoTasks = tasks.filter(task => task.status === "todo")
    const doingTasks = tasks.filter(task => task.status === "doing")
    const doneTasks = tasks.filter(task => task.status === "done")

    return (
        <div className="d-flex h-100" style={{background:"rgba(255,255,255,0.3)"}}>
            <TaskPanel state={todoTasks} title="To do"/>
            <TaskPanel state={doingTasks} title="Doing"/>
            <TaskPanel state={doneTasks} title="Done"/>
            <CustomModal/>
        </div>
    );
};

export default Main;