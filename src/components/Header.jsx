import {React, Component} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

class Header extends Component {
  constructor(props) {
    super(props);

    this.themeShift = this.themeShift.bind(this);
  }

  themeShift = () => {
    const body = document.getElementById('pageBody')
    const bgDownSwitch = document.getElementsByClassName('bg-down-switch')
    const bgUpSwitch = document.getElementsByClassName('bg-up-switch')
    const colorSwitch = document.getElementsByClassName('color-switch')
    const imageSwitch = document.getElementsByClassName('image-switch')

    if(!body.classList.contains('bg-var-black')) {
      body.classList.toggle('bg-var-black')
      body.classList.toggle('bg-white')
      for(let i = 0; i < imageSwitch.length; i++) {
        imageSwitch[i].src = '/img/product-light.png'
      }
      for(let i = 0; i < colorSwitch.length; i++) {
        colorSwitch[i].classList.toggle('text-var-white')
        colorSwitch[i].classList.toggle('text-var-black')
      }
      for(let i = 0; i < bgDownSwitch.length; i++) {
        bgDownSwitch[i].classList.toggle('gradient-down-light')
        bgDownSwitch[i].classList.toggle('gradient-down-dark')
      }
      for(let i = 0; i < bgUpSwitch.length; i++) {
        bgUpSwitch[i].classList.toggle('gradient-up-light')
        bgUpSwitch[i].classList.toggle('gradient-up-dark')
      }
    } else {
      body.classList.toggle('bg-white')
      body.classList.toggle('bg-var-black')
      for(let i = 0; i < imageSwitch.length; i++) {
        imageSwitch[i].src = '/img/product-dark.png'
      }
      for(let i = 0; i < colorSwitch.length; i++) {
        colorSwitch[i].classList.toggle('text-var-black')
        colorSwitch[i].classList.toggle('text-var-white')
      }
      for(let i = 0; i < bgDownSwitch.length; i++) {
        bgDownSwitch[i].classList.toggle('gradient-down-dark')
        bgDownSwitch[i].classList.toggle('gradient-down-light')
      }
      for(let i = 0; i < bgUpSwitch.length; i++) {
        bgUpSwitch[i].classList.toggle('gradient-up-dark')
        bgUpSwitch[i].classList.toggle('gradient-up-light')
      }
    }
  }

  render(){
    return (
      <div className="Navbar">
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
          <Container className='py-2'>
            <Navbar.Brand href="#home" className='d-flex align-items-center'>
              <img
                alt="logo"
                src="/img/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top me-3"
              />
              <img src="/img/product-dark.png" alt="product" className='image-switch'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link href="#home" className='color-switch active fw-bold text-var-black'>Product</Nav.Link>
                <Nav.Link className='color-switch text-var-black' href="#features">Customers</Nav.Link>
                <Nav.Link className='color-switch text-var-black' href="#pricing">Pricing</Nav.Link>
                <Nav.Link className='color-switch text-var-black' href="#pricing">Resources</Nav.Link>
                <Nav.Link href="#pricing" className="color-switch btn outline-gray bg-transparent mx-lg-2 my-2 px-4 text-var-black">Sign In</Nav.Link>
                <Nav.Link href="#pricing" className="btn bg-var-green text-var-white mx-lg-2 my-2 px-4">Sign Up</Nav.Link>
                <img
                  alt="logo"
                  src="/img/switch-theme.png"
                  width="30"
                  height="30"
                  className="theme-shifter d-inline-block align-top ms-2"
                  id='themeShifter'
                  onClick={this.themeShift}
                />                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
  
export default Header