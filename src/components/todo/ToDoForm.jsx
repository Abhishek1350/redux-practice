import { Button, Modal, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../services/action/action";

const ToDoForm = (props) => {
  const dispatch = useDispatch();

  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) => {
    setTodoData({
      ...todoData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (todoData.title === '' || todoData.description === '') return alert('Please fill all the fields')
    if (props.editmodaldata) {
      dispatch(editTodo({
        id: props.editmodaldata._id,
        title: todoData.title,
        description: todoData.description,
      }))
    } else {
      dispatch(addTodo({
        title: todoData.title,
        description: todoData.description,
      }))
    }
    setTodoData({
      title: '',
      description: '',
    })
    props.onHide();
  }

  useEffect(() => {
    if (props.editmodaldata) {
      setTodoData({
        title: props.editmodaldata.title,
        description: props.editmodaldata.description,
      })
    } else {
      setTodoData({
        title: '',
        description: '',
      })
    }
  }, [props.editmodaldata])

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="What's this about"
              name="title"
              value={todoData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="description"
              value={todoData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-center">
            <Button
              variant="primary"
              className="w-50 fw-bold"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ToDoForm