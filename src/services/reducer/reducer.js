import { ADD_TODO, SET_TODO, SET_TODOS, DELETE_TODO, DELETE_ALL } from "../constants"

export const todoData = (data = [], action) => {
    switch (action.type) {

        case SET_TODOS:
            return action.data

        case ADD_TODO:
            return data

        case SET_TODO:
            if (action.id) {
                return data.filter(todo => todo._id !== action.id)
            }
            return [...data, action.data]

        case DELETE_TODO:
            return data

        // case DELETE_ALL:
        //     console.log('delete all')
        //     return action.data

        default:
            return data
    }
}