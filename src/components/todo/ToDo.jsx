import { Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"

const ToDo = () => {
  return (
    <Col md={3} className="mb-4">
      <Card >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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