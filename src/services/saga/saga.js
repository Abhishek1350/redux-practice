import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODOS, SET_TODOS, SET_TODO, ADD_TODO, DELETE_TODO } from '../constants'

const BASE_URL = process.env.REACT_APP_BASE_URL

function* getTodos() {
    let todos = yield fetch(`${BASE_URL}/todos`)
    todos = yield todos.json()
    yield put({ type: SET_TODOS, data: todos })
}

function* addTodo(data) {
    let todo = yield fetch(`${BASE_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.data)
    })
    todo = yield todo.json()
    yield put({ type: SET_TODO, data: todo })
}

function* deleteTodo(data) {
    yield fetch(`${BASE_URL}/todo/${data.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    yield put({ type: GET_TODOS })
}

function* todoSaga() {
    yield takeEvery(GET_TODOS, getTodos)
    yield takeEvery(ADD_TODO, addTodo)
    yield takeEvery(DELETE_TODO, deleteTodo)
}

export default todoSaga
