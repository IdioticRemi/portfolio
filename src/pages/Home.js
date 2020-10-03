import React, {Component} from 'react';

import {Card, Col, Container, Row} from "react-bootstrap";
import selfie from "../images/selfie-cropped.jpg";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Container>
                <h2 className="ml-3">
                    Hello there! Welcome to my website!
                </h2>
                <Row className="mt-3">
                    <Col sm={12} md={8} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Hello everyone! Welcome to my website! I'm about to describe to you who I am, let's get started!
                                    <br/><br/>
                                    So, I am currently 16 years old. I'm a french student (currently in last year of high school).
                                    My favourite animals are llamas and cats! They're very cute, just like my boyfriend 💕
                                    Anyways, I discovered programming when I was 9 in a club in the school I was in.
                                    Then I started doing some in my free time, on my own when I was 10 or 11. Since that moment,
                                    i've trained a lot and gathered some experience, started open-source projects, did stuff for the
                                    community and overall achieved to do some cool stuff (mainly discord bots related unfortunately)
                                    <br/><br/>
                                    So let's tell you about what I learnt during these years. When I was 9 i learnt stuff about python.
                                    But then, by playing some Minecraft around the age of 10, I discovered Java and did some plugins
                                    for Minecraft servers (mostly moderation-related, maybe 1 or 2 mini-games).
                                    I also practiced web development (basically static websites). When I was 13 I discovered
                                    the Node.JS magic and fell in love for it. So now I'd say I became really good at JavaScript.
                                    <br/>
                                    I have then discovered TypeScript and little did I know I could love something that much!
                                    I've done a lot of discord bot related stuff (music bot, image-manipulation api, multipurpose bot, modules, ...).
                                    One other thing is I love helping people out with development and I make almost every project I do open-source and
                                    love contributing to some of my friends' repos. Lately, I've been learning other languages such as GoLang, Rust, C++,
                                    Python, and also some frameworks like Fyne, Vue and React.
                                    <br/><br/>
                                    Lots of talking, now go take a look at some <Link to="/projects">projects</Link> I've worked on 😉
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={selfie}/>
                            <Card.Header>
                                <Card.Title>Thomas J. (Kizuru)</Card.Title>
                                <Card.Subtitle>Look at this dude</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    - Supposedly good at english<br/>
                                    - Main language is JS (Node.JS)<br/>
                                    - Loves TypeScript<br/>
                                    - Knows a bit of Python<br/>
                                    - Learnt Go, tried Rust<br/>
                                    - Has interests for C++<br/>
                                    - Used Ruby on Rails<br/>
                                    - Learns fast af<br/>
                                    - People say I'm nice
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;