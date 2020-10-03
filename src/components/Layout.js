import React, {Component} from 'react';

import {Container} from "react-bootstrap";

import LayoutHeader from "./Header";
import LayoutFooter from "./Footer";

class Layout extends Component {
    render() {
        return (
            <div className="d-flex flex-column" style={{ height: "100vh" }}>
                <div style={{ flex: "1 0 auto" }}>
                    <LayoutHeader/>

                    <Container style={{ height: "100%" }}>
                        {this.props.children}
                    </Container>
                </div>

                <div style={{ flexShrink: 0 }}>
                    <LayoutFooter/>
                </div>
            </div>
        );
    }
}

export default Layout;