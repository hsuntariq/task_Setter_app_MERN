import React from 'react'
import { Container,Form,Row,Col,Button } from 'react-bootstrap'

const AddGoal = () => {
  return (
    <>
        <Container>
            <Row>
                <Col lg={6}>
                    <img style={{width:'100%'}} src="https://www.ntaskmanager.com/wp-content/uploads/2022/11/Measurable-Goals-and-Objectives.png" alt="" />
                </Col>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Goal</Form.Label>
                            <Form.Control type="text" placeholder='Enter You Goal...'/>
                        </Form.Group>
                        <Button className="btn-success my-3 w-100">Add Goal</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AddGoal