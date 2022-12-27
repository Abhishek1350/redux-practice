import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../../services/action/action";

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
    dispatch(addTodo({
      title: todoData.title,
      description: todoData.description,
    }))
    setTodoData({
      title: '',
      description: '',
    })
    props.onHide();
  }

  return (
    <Modal
      {...props}
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