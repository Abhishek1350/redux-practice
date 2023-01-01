import { ADD_TODO, DELETE_TODO, EDIT_TODO,  SET_TODOS } from "../constants"

export const todoData = (data = [], action) => {
    switch (action.type) {

        case SET_TODOS:
            return action.data

        case ADD_TODO:
            return data

        // case DELETE_TODO:
        //     console.log(action)
        //     return data

        // case EDIT_TODO:
        //     return data

        default:
            return data
    }
}