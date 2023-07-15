import React from 'react'
import { Card, Container,Col,Row } from 'react-bootstrap'
import {MdOutlineDelete} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'
const ShowGoals = () => {
  return (
    <>
        <Container>
            <h1 className='display-1 text-center'>Your Goals</h1>
            <Row>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Goal</Card.Title>
                            <Card.Subtitle>Date</Card.Subtitle>
                            <Card.Text>This is your goal</Card.Text>
                            <div className="d-flex justify-content-center">
                            <Card.Link><MdOutlineDelete className="text-danger"/></Card.Link>
                            <Card.Link><AiOutlineEdit className="text-info"/></Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Goal</Card.Title>
                            <Card.Subtitle>Date</Card.Subtitle>
                            <Card.Text>This is your goal</Card.Text>
                            <div className="d-flex justify-content-center">
                            <Card.Link><MdOutlineDelete className="text-danger"/></Card.Link>
                            <Card.Link><AiOutlineEdit className="text-info"/></Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Goal</Card.Title>
                            <Card.Subtitle>Date</Card.Subtitle>
                            <Card.Text>This is your goal</Card.Text>
                            <div className="d-flex justify-content-center">
                            <Card.Link><MdOutlineDelete className="text-danger"/></Card.Link>
                            <Card.Link><AiOutlineEdit className="text-info"/></Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Goal</Card.Title>
                            <Card.Subtitle>Date</Card.Subtitle>
                            <Card.Text>This is your goal</Card.Text>
                            <div className="d-flex justify-content-center">
                            <Card.Link><MdOutlineDelete className="text-danger"/></Card.Link>
                            <Card.Link><AiOutlineEdit className="text-info"/></Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    </>
  )
}

export default ShowGoals