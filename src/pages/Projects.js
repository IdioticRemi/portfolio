import React, {Component} from 'react';

import {Badge, Button, Card, Col, Container, Row} from 'react-bootstrap';

import projects from "../constants/projects";

class Projects extends Component {
    render() {
        const items = [];

        for (const [iProject, project] of projects.entries()) {
            const tags = [];

            for (const [iTag, tag] of project.tags.entries()) {
                tags.push(
                    <Col key={iTag} className="px-0 mx-1">
                        <Badge pill variant={tag.variant}>{tag.name}</Badge>
                    </Col>
                )
            }

            items.push(
                <Col key={iProject} className="mb-3">
                    <Card className="project-card" style={{height: "18rem"}}>
                        <Card.Header className="pb-0">
                            <Card.Title>
                                {project.name}
                            </Card.Title>
                        </Card.Header>
                        <Card.Header className="pb-0">
                            <Card.Subtitle className="mb-1">
                                Tags:
                            </Card.Subtitle>
                            <Card.Title style={{"display": "flex", "flex-direction": "column", "justify": "space-between"}}>
                                <Row style={{"display": "inline-flex"}}>
                                    {tags}
                                </Row>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body >
                            <Card.Text>
                                {project.desc}
                            </Card.Text>
                        </Card.Body>
                        <Container fluid className="mb-3">
                            <Button variant="outline-dark" href={project.url} target="_blank" style={{"width": "100%"}}>
                                Source Code
                            </Button>
                        </Container>
                    </Card>
                </Col>
            )
        }

        return (
            <Container>
                <h2 className="ml-3">
                    Some projects I worked on
                </h2>
                <Row xs={1} md={2} xl={3} className="mt-3">
                    {items}
                </Row>
            </Container>
        );
    }
}

export default Projects;