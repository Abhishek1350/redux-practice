import { ADD_TODO, SET_TODO, SET_TODOS, DELETE_TODO, DELETE_ALL } from "../constants"

export const todoData = (data = [], action) => {
    switch (action.type) {

        case SET_TODOS:
            return action.data

        case ADD_TODO:
            return data
            
        case SET_TODO:
            return [...data, action.data]

        case DELETE_TODO:
            return data

        case DELETE_ALL:
            return []

        default:
            return data
    }
}