import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap'

export default function PopularBand({ bands }) {
    return (
        <div className="PopularBand">
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={14} xxl={16}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Popular Band</Card.Header>
                            <Card.Img variant="top" key={bands.id} src={bands['url-for-image-thumb']} alt="popularBandImageThumb" />
                            <Card.Body>
                                <Card.Title key={bands.id}>{bands.name}</Card.Title>
                                <Card.Text>
                                    {bands.categories.category.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}