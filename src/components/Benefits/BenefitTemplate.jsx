import React from "react"
import {Col} from 'react-bootstrap'

function BenefitTemplate({image, title, paragraph}) {
    return (
        <Col sm className='text-center text-lg-start'>
            <img src={image} alt="" />
            <h5 className='fw-bold my-4'>{title}</h5>
            <p>{paragraph}</p>
        </Col>
    )
}

export default BenefitTemplate