import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import React from "react";



export default class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>

                <Navbar bg="dark" data-bs-theme="dark" >
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink style={{ marginRight: "20px", textDecoration: "none", color: "white" }} to="/">Home</NavLink>
                        </Nav>

                    </Container>
                </Navbar>
                <br />
            </>
        );


    }
}