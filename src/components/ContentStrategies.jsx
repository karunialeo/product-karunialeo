import React from 'react'
import {Container, Card, Row, Col} from 'react-bootstrap'

function ContentStrategies() {
    return (
        <div className="content-strategies">
            <Container className="my-5">
                <h1 className='fw-bolder mt-5'>Contents Strategies</h1>
                <p className='mt-3 mb-5'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <Container fluid className='d-lg-flex justify-content-between gap-4'>
                    <Card className='col mb-5'>
                        <Card.Img variant="top" src="/img/card-img-1.png" />
                        <Card.Body>
                            <Card.Text><small class="text-muted">By <span className='fw-bold'>Leo Gultom</span> |  03 March 2019</small></Card.Text>
                            <Card.Title className='fw-bolder fs-3'>Increasing Prosperity With Positive Thinking</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='col mb-5'>
                        <Card.Img variant="top" src="/img/card-img-2.png" />
                        <Card.Body>
                            <Card.Text><small class="text-muted">By <span className='fw-bold'>Leo Gultom</span> |  03 March 2019</small></Card.Text>
                            <Card.Title className='fw-bolder fs-3 text-var-green'>Motivation Is The First Step To Success</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='col mb-5'>
                        <Card.Img variant="top" src="/img/card-img-3.png" />
                        <Card.Body>
                            <Card.Text><small class="text-muted">By <span className='fw-bold'>Leo Gultom</span> |  03 March 2019</small></Card.Text>
                            <Card.Title className='fw-bolder fs-3'>Success Steps For Your Personal Or Business</Card.Title>
                        </Card.Body>
                    </Card>
                </Container>
                <Container className='dis-none'>
                    <Row>
                        <Col className='text-center'>
                            <img src="/img/dot-gray.png" alt="dot-gray" />
                            <img src="/img/dot-green.png" alt="dot-green" className='mx-2'/>
                            <img src="/img/dot-gray.png" alt="dot-gray" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default ContentStrategies