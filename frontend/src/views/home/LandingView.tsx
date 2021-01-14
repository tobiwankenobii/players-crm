import React from 'react';
import {
    Card,
    Button,
    Container,
    Row,
    Carousel,
    Col,
    Badge,
    Image,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LandingView = () => {
    const history = useHistory();
    return (
        <Container>
            <Row className="min-vh-100 max-vh-100 justify-content-center align-items-center">
                <Col xs={11} md={10} lg={10}>
                    <Card className="bg-dark text-center text-white">
                        <Card.Header>
                            <h1 className="text-white">
                                <Badge variant="secondary">Players CRM</Badge>
                            </h1>
                            <h5 className="text-white">Server Essentials</h5>
                        </Card.Header>
                        <Card.Body>
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <Image
                                        className="d-block w-100"
                                        src="/images/chart.png"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h4 className="text-white">
                                            Live Dashboards
                                        </h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <Image
                                        className="d-block w-100"
                                        src="/images/chart.png"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h4 className="text-white">
                                            Any Source
                                        </h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <Image
                                        className="d-block w-100"
                                        src="/images/chart.png"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h4 className="text-white">
                                            Easy Setup
                                        </h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                            <Button
                                className="mt-4"
                                variant="info"
                                onClick={() => history.push('/login')}
                            >
                                Get Started
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            Copyright &copy; PlayersCRM
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default LandingView;
