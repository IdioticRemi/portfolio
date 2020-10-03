import React, {Component} from 'react';

import {Container} from 'react-bootstrap'

class LayoutFooter extends Component {
    render() {
        return (
            <Container fluid className="bg-light py-3 mt-3">
                <Container>
                    <div className="d-flex flex-sm-column flex-md-column flex-lg-row justify-content-around">
                        <div className="text-center">
                            <b>© 2020-2020</b><br/>Thomas Joliveau
                        </div>
                    </div>
                </Container>
            </Container>
        );
    }
}

export default LayoutFooter;