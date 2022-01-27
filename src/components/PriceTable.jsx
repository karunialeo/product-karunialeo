import React from 'react'
import {Container, Card, Row, Col, Button} from 'react-bootstrap'

function PriceTable() {
    return (
        <div className="price-table" id='pricing'>
            <Container className="my-5">
                <h2 className='text-center fw-bolder'>Price Table</h2>
                <p className='text-center mt-3 mb-5'>We offer competitive price</p>
                <Container className='d-lg-flex justify-content-between gap-5'>
                    <Card className='col mb-5 text-center shadow'>
                        <Card.Body>
                            <Card.Text className='mb-4'>
                                <h4 className='fw-bold mb-4'>Free</h4>
                                <p>Brief price description</p>
                            </Card.Text>
                            <Row className='d-flex mb-4 align-items-center'>
                                <Col className='large-font fw-bold text-var-green col-auto offset-3'>0</Col>
                                <Col className='text-start'>
                                    <p className='text-var-green fw-bold mb-1'>$</p>
                                    <p className='text-var-gray mb-1'>Per / month</p>
                                </Col>
                            </Row>
                            <Card.Text className='mb-4'>
                                <p>Only 2 Operators</p>
                                <p>Notifications</p>
                                <p>Landing Pages</p>
                            </Card.Text>
                            <Button className='bg-var-green text-light btn-outline-success my-2'>Order Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className='col mb-5 bg-var-green text-light text-center shadow'>
                        <Card.Body>
                            <Card.Text className='mb-4'>
                                <h4 className='fw-bold mb-4'>Standard</h4>
                                <p>Brief price description</p>
                            </Card.Text>
                            <Row className='d-flex mb-4 align-items-center'>
                                <Col className='large-font fw-bold col-auto offset-3'>5</Col>
                                <Col className='text-start'>
                                    <p className='fw-bold mb-1'>$</p>
                                    <p className='text-var-gray mb-1'>Per / month</p>
                                </Col>
                            </Row>
                            <Card.Text className='mb-4'>
                                <p>5+ Operators</p>
                                <p>Notifications</p>
                                <p>Landing Pages</p>
                            </Card.Text>
                            <Button className='bg-light text-var-green btn-outline-success my-2'>Order Now</Button>
                        </Card.Body>
                    </Card>
                    <Card className='col mb-5 text-center shadow'>
                        <Card.Body>
                            <Card.Text className='mb-4'>
                                <h4 className='fw-bold mb-4'>Premium</h4>
                                <p>Brief price description</p>
                            </Card.Text>
                            <Row className='d-flex mb-4 align-items-center'>
                                <Col className='large-font fw-bold text-var-green col-auto offset-3'>10</Col>
                                <Col className='text-start'>
                                    <p className='text-var-green fw-bold mb-1'>$</p>
                                    <p className='text-var-gray mb-1'>Per / month</p>
                                </Col>
                            </Row>
                            <Card.Text className='mb-4'>
                                <p>10+ Operators</p>
                                <p>Notifications</p>
                                <p>Landing Pages</p>
                            </Card.Text>
                            <Button className='bg-var-green text-light btn-outline-success my-2'>Order Now</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </div>
    )
}

export default PriceTable