import React, {Component} from 'react';

import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class LayoutHeader extends Component {
    render() {
        return (
            <Navbar bg="light" expand="md" className="mb-3">
                <Container>
                    <Link className="navbar-brand" to="/">Kizuru.fr</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/projects">Projects</Link>
                            <Link className="nav-link" to="/thanks">Special Thanks</Link>
                            <Link className="nav-link" to="/any-url-lol">404 page uwu</Link>
                        </Nav>
                        <Link className="btn btn-outline-dark" to="/contact">Contact me!</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default LayoutHeader;