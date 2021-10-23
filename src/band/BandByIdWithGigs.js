import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row } from 'react-bootstrap'

export default function BandByIdWithGigs({ concert, bandName }) {
    return (

                <Container style={{display: 'flex', flexDirection: 'right', 'flex-flow': 'wrap' }} className="GigFromBand">
                    <Row>
                <Card style={
                    { width: '18rem' }}>
                    <Card.Header> Gig From Band {bandName} </Card.Header>
                    <Card.Img variant="top"
                        key={concert.id}
                        src={concert.band['url-for-image-thumb']}
                        alt="popularBandImageThumb" />
                    <Card.Body >
                        <Card.Title key={concert.id}> {concert.name} </Card.Title>
                        <Card.Text> {concert.date['']} 
                        </Card.Text>
                        <Card.Text>{concert.stage.name !== undefined ? concert.stage.name : concert.stage.adress}</Card.Text>
                    </Card.Body>
                </Card>
                </Row>
            </Container>

    )
}