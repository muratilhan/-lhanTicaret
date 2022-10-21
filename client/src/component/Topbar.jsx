import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "../styles/nav.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../bootstrap.min.css'
import { Context } from '../App';

function Topbar() {

  const context = useContext(Context);


  return (
    <Navbar className='py-3 topbar-container' expand="lg">
      <Container fluid>
        <Navbar.Brand ><Link to="/" className='topbar-brand'>İLHAN TİCARET</Link></Navbar.Brand>
        <div className='top-mid-container'>
        <Navbar.Collapse className='nav-search' id="navbarScroll">
          <Nav
            className=""
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              
          </Nav>
        </Navbar.Collapse>
        </div>
        <ul className='log'>
          { context.user ?<Link to="/login" className='logout-span' onClick={()=>context.setUser(null)}>LOGOUT</Link> :
            <>
              <li><Link to="/login" style={{color:"black"}}>LOGIN</Link></li>
              <li><Link to="/register" style={{color:"black"}}>REGISTER</Link></li>
            </>
            }
          <li><Link to="/cart" style={{fontSize:"30px",color:"orange"}}><i  class="fa-solid fa-cart-shopping"></i></Link></li>
        </ul>
      </Container>
    </Navbar>
  )
}

export default Topbar