import { ADD_TODO, SET_TODO, SET_TODOS, DELETE_TODO, EDIT_TODO, EDITED } from "../constants"

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

        case EDIT_TODO:
            return data

        case EDITED:
            return data.map(todo => {
                if (todo._id === action.data.id) {
                    return {
                        ...todo,
                        title: action.data.title,
                        description: action.data.description
                    }
                }
                return todo
            })

        default:
            return data
    }
}