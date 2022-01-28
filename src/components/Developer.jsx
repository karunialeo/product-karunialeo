import React from 'react'
import {Container, Button, Row, Col, Image} from 'react-bootstrap'

function Developer() {
    return (
        <div>
            <div className="my-5">
                <Container fluid className='bg-up-switch developer gradient-up-light'>
                    <h2 className='color-switch text-var-black fw-bolder text-center lh-base py-5'>Quick &#38; Easy Process</h2>
                    <p className='color-switch text-var-black col-lg-6 fw-bold offset-lg-3 text-center'>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
                    <Container className='col-lg-10 offset-lg-1'>
                        <Row className=''>
                            <Col lg={6} sm={12} className='d-flex mb-5 align-items-center justify-content-center'>
                                <Image src="/img/avator-1.png"/>
                                <span className='pill-text fw-bold align-middle'>I can take care of your pitch</span>
                            </Col>
                            <Col lg={6} sm={12} className='d-flex mb-5 align-items-center justify-content-center'>
                                <span className='pill-text fw-bold align-middle'>I can prototype your app</span>
                                <Image src="/img/avator-2.png"/>
                            </Col>
                            <Col lg={6} sm={12} className='d-flex mb-5 align-items-center justify-content-center flex-lg-row-reverse'>
                                <Image src="/img/avator-3.png"/>
                                <span className='pill-text fw-bold align-middle'>I can design you website</span>
                            </Col>
                            <Col lg={6} sm={12} className='d-flex mb-5 align-items-center justify-content-center flex-lg-row-reverse'>
                                <span className='pill-text fw-bold align-middle'>I can help marketing strategy</span>
                                <Image src="/img/avator-4.png"/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='text-center'>
                        <Button className='bg-var-green text-white px-4'>Contact our expert</Button>
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Developer