import { Container, Row, Button } from "react-bootstrap"
import { ToDo, ToDoForm } from "../components"
import { useState } from "react";

const Home = () => {
  const [modalShow, setModalShow] = useState(true);

  const showModal = () => {
    setModalShow(true)
  }

  return (
    <Container className="my-3">
      <div className="d-flex justify-content-center gap-lg-5">
        <h2 className="text-primary text-center">
          Here are your todos
        </h2>
        <Button variant="warning" className="fw-bold" onClick={showModal}>
          Add Todo
        </Button>
      </div>
      <Container>
        <Row>
          <ToDo />
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