import { Container, Row, Button } from "react-bootstrap"
import { ToDo, ToDoForm } from "../components"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodos, deleteAll } from "../services/action/action";

const Home = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const todos = useSelector((state) => state.todoData);

  const showModal = () => {
    setModalShow(true)
  }

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])


  return (
    <Container className="my-3">
      <div className="d-flex justify-content-center gap-lg-5">
        <h2 className="text-primary text-center">
          Here are your todos
        </h2>
        <Button variant="warning" className="fw-bold" onClick={showModal}>
          Add Todo
        </Button>

        <Button variant="danger" className="fw-bold" onClick={()=>dispatch(deleteAll())}>
          Delete All 
        </Button>
      </div>
      <Container className="my-5">
        <Row>
          {
            todos.length > 0 ? (
              todos.map((todo) => {
                return (
                  <ToDo
                    key={todo._id}
                    todo={todo}
                  />
                )
              })
            ) : (
              <h3 className="text-center text-danger">
                No todos found
              </h3>
            )
          }
        </Row>
      </Container>
      <ToDoForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}

export default Home