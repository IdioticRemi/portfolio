import React, {Component} from 'react';
import Image from "react-bootstrap/cjs/Image";

import notfound from '../images/notfound-black.png'

import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className="d-flex flex-lg-column justify-content-start justify-content-xl-center align-content-xl-center" style={{ height: "100%" }}>
                <div>
                    <Image src={notfound} alt="404 Not found!" fluid/>
                    <Container className="mt-3">
                        <Link to="/" className="btn btn-outline-dark">Head back home</Link>
                    </Container>
                </div>
            </div>
        );
    }
}

export default NotFound;