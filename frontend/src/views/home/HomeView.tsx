import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { getStats } from '../../actions/stats/statsActions';

const HomeView = () => {
    const data = {
        dataPie: {
            labels: ['Red', 'Green', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
                    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
                },
            ],
        },
    };
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStats());
    }, [dispatch]);

    return (
        <Container>
            <Card className="bg-dark text-white text-center mb-5">
                <Card.Header>
                    <h2 className="text-white text-center">
                        Statistics prepared on the basis of today's data
                    </h2>
                </Card.Header>
            </Card>

            <Row className="justify-content-center">
                <Col lg={6} xs={10}>
                    <Card className="bg-dark text-white text-center mb-5">
                        <Card.Header>
                            <h4 className="text-white">Last hour</h4>
                        </Card.Header>
                        <Card.Body>
                            <Pie
                                data={data.dataPie}
                                options={{ responsive: true }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeView;
