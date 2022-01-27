import React from 'react'
import {Container, Col, Button} from 'react-bootstrap'

function JoinUs() {
    return (
        <Container className='my-5'>
            <div className="col-lg-10 offset-lg-1">
                <Container className='join-us d-lg-flex align-items-center justify-content-between rounded-25 bg-var-green text-light p-4'>
                    <Col className='text-center text-lg-start'>
                        <h4 className='mb-5 fw-bold'>
                            Join 100 Companies who boost their business with Product
                        </h4>
                        <Button className='btn-light text-var-green mb-4'>Get This</Button>
                    </Col>
                    <Col className='col-auto'>
                        <img src="/img/join-us.png" alt="join us" height={280}/>
                    </Col>
                </Container>
            </div>
        </Container>
    )
}

export default JoinUs