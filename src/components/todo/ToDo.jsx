import { Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../services/action/action";

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  
  return (
    <Col md={3} className="mb-4">
      <Card >
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Text>
            {todo.description}
          </Card.Text>
          <div className="d-flex gap-1" title="add">

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  Delete
                </Tooltip>
              }
            >
              <button
                className="bg-transparent border-0 outline-0 text-danger fs-4"
                onClick={() => dispatch(deleteTodo(todo.title))}
              >
                <AiOutlineDelete />
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  Edit
                </Tooltip>
              }
            >
              <button
                className="bg-transparent border-0 outline-0 text-primary fs-4"
              >
                <AiOutlineEdit />
              </button>
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ToDo