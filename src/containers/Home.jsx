import { Container, Row, Button } from "react-bootstrap"
import { ToDo, ToDoForm } from "../components"
import { useState } from "react";
import { addTodo } from "../services/action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoData);

  const showModal = () => {
    setModalShow(true)
  }

  return (
    <Container className="my-3">
      <div className="d-flex justify-content-center gap-lg-5">
        <h2 className="text-primary text-center">
          Here are your todos
        </h2>
        <Button variant="warning" className="fw-bold" onClick={()=>dispatch(addTodo(["name"]))}>
          Add Todo
        </Button>
      </div>
      <Container>
        <Row>
          {
            todos.map((todo, index) => {
              return (
                <ToDo
                  key={index}
                  todo={todo}
                />
              )
            })
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