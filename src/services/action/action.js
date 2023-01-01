import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from "../constants"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        data
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const editTodo = (id, data) => {
    return {
        type: EDIT_TODO,
        id,
        data
    }
}

export const getTodos = () => {
    return {
        type: GET_TODOS,
    }
}