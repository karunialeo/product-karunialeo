import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ContentCard from './ContentCard'

function ContentStrategies() {
    return (
        <div className="content-strategies">
            <Container className="my-5">
                <h1 className='color-switch text-var-black fw-bolder mt-5'>Contents Strategies</h1>
                <p className='color-switch text-var-black mt-3 mb-5'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <Container fluid className='d-lg-flex justify-content-between gap-4'>
                    <ContentCard
                        author='Karunia Leo Gultom'
                        postAt='03 March 2019'
                        contentTitle='Increasing Prosperity With Positive Thinking'
                        titleColor='text-var-black'
                    />
                    <ContentCard
                        author='Karunia Leo Gultom'
                        postAt='03 March 2019'
                        contentTitle='Motivation Is The First Step To Success'
                        titleColor='text-var-green'

                    />
                    <ContentCard
                        author='Karunia Leo Gultom'
                        postAt='03 March 2019'
                        contentTitle='Success Steps For Your Personal Or Business'
                        titleColor='text-var-black'

                    />
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