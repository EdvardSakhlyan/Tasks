import React, {useState} from 'react';
import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../context";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, getInitialValuesAC, saveTaskAC} from "../../store/actions/actions";

const CustomModal = () => {

    const {isShow,handleClose} = useContext(Context)

    const {title,description,status,priority,id} = useSelector(state => state.taskReducer.initialValues)

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        const data = {
                "id": id ? id : Date.now(),
                "title": titleText,
                "description": descriptionText,
                "status": newStatus,
                "priority": JSON.parse(newPriority)
            }

        if (title === undefined){
            dispatch(addTaskAC(data))
        }else {
            dispatch(saveTaskAC(data))
        }
        dispatch(getInitialValuesAC({}))
        event.preventDefault()
    }

    const [titleText , setTitleText] = useState('')
    const [descriptionText , setDescriptionText] = useState('')
    const [newPriority , setNewPriority] = useState('[1]')
    const [newStatus , setNewStatus] = useState('todo')

    return (
        <Modal show={isShow} onHide={() => {
            handleClose()
            dispatch(getInitialValuesAC({}))
        }}
        onShow={() => {
            setTitleText(title ? title : '')
            setDescriptionText(description ? description : '')
            setNewPriority(priority ? JSON.stringify(priority) : '[1]')
            setNewStatus(status ? status : 'todo')
        }}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title ? "Edit Task" :"Add Task"}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <InputGroup className=" mb-3">
                        <div className="input-group-prepend" style={{width:"30%"}}>
                            <span className="input-group-text" id="addon-wrapping">Title</span>
                        </div>
                        <input
                            type="text"
                            className="form-control ms-3"
                            placeholder="Enter title"
                            aria-label="title"
                            aria-describedby="addon-wrapping"
                            value={titleText}
                            onChange={({target}) => setTitleText(target.value)}
                        />
                    </InputGroup>
                    <InputGroup className=" mb-3">
                        <div className="input-group-prepend" style={{width:"30%"}}>
                            <span className="input-group-text h-100" id="addon-wrapping">Description</span>
                        </div>
                        <textarea
                            className="form-control ms-3 modalTextArea"
                            placeholder="Enter description"
                            aria-label="description"
                            aria-describedby="addon-wrapping"
                            value={descriptionText}
                            onChange={({target}) => setDescriptionText(target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <div className="input-group-prepend" style={{width:"30%"}}>
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Choose priority</label>
                        </div>
                        <select
                            value={newPriority}
                            className="stars w-25 ps-1 ms-3"
                            style={{color: "#ffcd38"}}
                            onChange={({target}) => setNewPriority(target.value)}
                        >
                            <option value="[1]" style={{color: "#ffcd38"}}>
                                &#9733;
                            </option>
                            <option value="[1,2]" style={{color: "#ffcd38"}}>
                                &#9733;
                                &#9733;
                            </option>
                            <option value="[1,2,3]" style={{color: "#ffcd38"}}>
                                &#9733;
                                &#9733;
                                &#9733;
                            </option>
                        </select>
                    </InputGroup>
                    <InputGroup>
                        <div className="input-group-prepend" style={{width:"30%"}}>
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Choose status</label>
                        </div>
                                <div className="mb-3 ms-3">
                                    <Form.Check
                                        inline
                                        label="To Do"
                                        name="group1"
                                        type='radio'
                                        id="radio-1"
                                        onChange={() => setNewStatus('todo')}
                                        checked={newStatus === 'todo'}
                                    />
                                    <Form.Check
                                        inline
                                        label="Doing"
                                        name="group1"
                                        type='radio'
                                        id="radio-2"
                                        onChange={() => setNewStatus('doing')}
                                        checked={newStatus === 'doing'}
                                    />
                                    <Form.Check
                                        inline
                                        label="Done"
                                        name="group1"
                                        type='radio'
                                        id="radio-3"
                                        onChange={() => setNewStatus('done')}
                                        checked={newStatus === 'done'}
                                    />
                                </div>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                        Save Task
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default CustomModal;