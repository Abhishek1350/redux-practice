import { ADD_TODO, DELETE_TODO, GET_TODOS, DELETE_ALL } from "../constants"

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

export const getTodos = () => {
    return {
        type: GET_TODOS,
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL,
    }
}