import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {Context} from "../../context";
import Star from "../SVGs/star";
import {useDispatch} from "react-redux";
import {deleteTaskAC, getInitialValuesAC} from "../../store/actions/actions";

const Task = ({title,priority,description,status,id}) => {

    const {handleShow} = useContext(Context)

    const dispatch = useDispatch()

    return (
        <div className="p-2 bg-body m-1 rounded taskSection">
            <div className="d-flex justify-content-between">
                <h6 style={{color:"#363985",fontWeight:'bold'}}>{title}</h6>
                <div>
                    <Button className="m-1 editButton btn-sm btn-danger"
                        onClick={() => dispatch(deleteTaskAC(id))}
                    >
                        Delete
                    </Button>
                    <Button className="m-1 editButton btn-sm" onClick={() => {
                        handleShow()
                        dispatch(getInitialValuesAC({
                            title,
                            priority,
                            description,
                            status,
                            id
                        }))
                    }}>Edit</Button>
                </div>
            </div>
            <div className="d-flex align-items-center mb-3">
                <h6 className="mb-0 me-1">Priority:</h6>
                {priority.map((num) => <div className="d-flex align-items-center" key={num}><Star/></div>)}
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Task;