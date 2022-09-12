export const ADD_TASK = 'ADD_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const GET_VALUES = 'GET_VALUES'
export const DELETE_TASK = 'DELETE_TASK'

export const addTaskAC = (data) => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

export const saveTaskAC = (data) => {
    return {
        type: SAVE_TASK,
        payload: data
    }
}

export const getInitialValuesAC = (data) => {
    return {
        type: GET_VALUES,
        values: data
    }
}

export const deleteTaskAC = (id) => {
    return {
        type: DELETE_TASK,
        taskId: id
    }
}