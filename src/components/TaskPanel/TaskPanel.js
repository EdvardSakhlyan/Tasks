import React from 'react';
import Task from "../Task/Task";

const TaskPanel = ({state,title}) => {
    return (
        <div style={{background: "#ebecf0" , height: "min-content"}} className="w-25 m-3 p-2 flex-grow-1 rounded">
            <h3 className="m-1">{title}</h3>
            {
                state.map(({id,title,description,priority,status}) => (
                    <div key={id}>
                        <Task title={title} priority={priority} description={description} status={status} id={id}/>
                    </div>
                ))
            }
        </div>
    );
};

export default TaskPanel;