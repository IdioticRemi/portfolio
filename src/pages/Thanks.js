import React, {Component} from 'react';

import {Card, Container} from "react-bootstrap";

class Thanks extends Component {
    render() {
        return (
            <Container>
                <h2 className="ml-3">
                    Special thanks for everyone!
                </h2>
                <Card className="my-3">
                    <Card.Header>
                        <Card.Title>
                            Evie.Codes & AnIdiotsGuide
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            First of all, <b>I LOVE YOUR CONTENT</b>. It has helped me grow a lot
                            when I was learning JavaScript and understanding new programming concepts.
                            What I really liked at first was your approach to teaching random people
                            what looked complicated but was not thanks to your explanations.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="https://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw">Evie.Codes's youtube channel</Card.Link>
                        <Card.Link href="https://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA">AnIdiotsGuide's youtube channel</Card.Link>
                    </Card.Footer>
                </Card>
                <Card className="mb-3">
                    <Card.Header>
                        <Card.Title>
                            Platforms & Community
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            StackOverFlow, Github and docs are literally the best things <b>EVER</b>.
                            I love the development community and want to thank everyone who's helped me
                            go through the pain and errors I encountered in the past 💕
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="https://stackoverflow.com/">StackOverFlow</Card.Link>
                        <Card.Link href="https://github.com/">Github</Card.Link>
                        <Card.Link href="https://www.w3schools.com/">W3Schools</Card.Link>
                        <Card.Link href="https://developer.mozilla.org/en-US/">MDN Docs</Card.Link>
                    </Card.Footer>
                </Card>
            </Container>
        );
    }
}

export default Thanks;