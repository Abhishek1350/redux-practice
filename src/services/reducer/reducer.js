import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../constants"

export const todoData = (data = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...data, action.data]

        case DELETE_TODO:
            data.length = data.length - 1
            return [...data]

        default:
            return data
    }
}