import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Django-React-ATM</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Головна сторінка</NavLink>
                        <NavLink className='nav-link' to="/register">Реєстрація</NavLink>
                        <NavLink className='nav-link' to="/login">Увійти</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;