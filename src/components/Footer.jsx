import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

function Footer() {
    return (
        <footer className='container mt-5'>
            <Row>
                <Col className='text-center text-lg-start mb-4' sm={12} lg={3}>
                    <div className='fw-bold text-var-black mb-3'><img src="/img/logo.png" alt="logo" /> <img src="/img/product.png" alt="product" /></div>
                    <a href="https://instagram.com/karunialeo" target='_blank' className='me-3 fs-2'><i class="bi bi-instagram bg-var-lightgreen px-2 rounded-circle text-var-green" /></a>
                    <a href="https://facebook.com/leo.karunia" target='_blank' className='me-3 fs-2'><i class="bi bi-facebook bg-var-lightgreen px-2 rounded-circle text-var-green" /></a>
                    <a href="https://twitter.com/karunialeo" target='_blank' className='me-3 fs-2'><i class="bi bi-whatsapp bg-var-lightgreen px-2 rounded-circle text-var-green" /></a>
                </Col>
                <Col className='text-center text-lg-start' sm={12} lg={3}>
                    <h5 className='fw-bold'>Resources</h5>
                    <ul className="list-unstyled">
                        <li className='lh-lg'>About Us</li>
                        <li className='lh-lg'>Blog</li>
                        <li className='lh-lg'>Contact</li>
                        <li className='lh-lg'>FAQ</li>
                    </ul>
                </Col>
                <Col className='text-center text-lg-start' sm={12} lg={3}>
                    <h5 className='fw-bold'>Legal Stuff</h5>
                    <ul className="list-unstyled">
                        <li className='lh-lg'>Disclaimer</li>
                        <li className='lh-lg'>Financing</li>
                        <li className='lh-lg'>Privacy Policy</li>
                        <li className='lh-lg'>Terms of Service</li>
                    </ul>
                </Col>
                <Col className='text-center text-lg-start' sm={12} lg={3}>
                    <h5 className='fw-bold mb-4'>knowing you're always on the best energy deal.</h5>
                    <input className='col-12 outline-gray shadow-sm mb-2' type="text" name="form" id="form" />
                    <Button className='bg-var-green text-light btn-outline-success my-2'>Sign Up Now</Button>
                </Col>
            </Row>
            <Row className="text-center my-4">
                <p>Made With Love By Karunia Leo Gultom.<br />All Right Reserved</p>
            </Row>
        </footer>
    )
}

export default Footer