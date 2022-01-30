import React from "react"
import {Card} from 'react-bootstrap'

function ContentCard(props) {
    return (
        <Card className='col mb-5'>
            <Card.Img variant="top" src="/img/card-img-1.png" />
            <Card.Body>
                <Card.Text><small className="text-muted">By <span className='fw-bold'>{props.author}</span> |  {props.postAt}</small></Card.Text>
                <Card.Title className={'fw-bolder fs-3 ' + props.titleColor}>{props.contentTitle}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ContentCard