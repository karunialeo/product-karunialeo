import React from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'
import BenefitTemplate from './Benefits/BenefitTemplate'

function Benefit() {
    const imageFile = (image) => {
        return(`/img/${image}.png`)
    }

    return (
        <div className="bg-down-switch benefit gradient-down-light">
            <div className="my-5">
                <h2 className='color-switch text-var-black fw-bolder text-center lh-base py-5'>Product was Built Specifically<br />for You</h2>
                <Container fluid className='benefit'>
                    <Container className='color-switch text-var-black'>
                        <Row className='d-lg-flex justify-content-between pb-5'>
                            <BenefitTemplate
                                image={imageFile('icon1')}
                                title="First click tests"
                                paragraph="While most people enjoy casino gambling,"
                            />
                            <BenefitTemplate
                                image={imageFile('icon2')}
                                title="Design surveys"
                                paragraph="Sports betting, lottery and bingo playing for the fun"
                            />
                            <BenefitTemplate
                                image={imageFile('icon3')}
                                title="Preference tests"
                                paragraph="The Myspace page defines the individual."
                            />
                            <BenefitTemplate
                                image={imageFile('icon4')}
                                title="Five second tests"
                                paragraph="Personal choices and the overall personality of the person."
                            />
                        </Row>
                    </Container>
                    <Container className='text-center'>
                        <Button className='bg-var-green text-white px-4'>Sign Up Now</Button>
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Benefit