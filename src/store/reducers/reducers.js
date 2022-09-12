import db from '../../db/db.json'
import {ADD_TASK, DELETE_TASK, GET_VALUES, SAVE_TASK} from "../actions/actions";
if (!localStorage.getItem('state')){
    localStorage.setItem('state' , JSON.stringify(db.tasks))
}

const initialState = {
    tasks: JSON.parse(localStorage.getItem('state')),
    // tasks: db.tasks,
    initialValues: {}
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case SAVE_TASK:
            return {
                tasks: state.tasks.map(task => task.id !== action.payload.id ? task : action.payload)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            }
        case GET_VALUES:
            return {
                ...state,
                initialValues: action.values
            }
        default:
            return state
    }
}


