import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

export default function PopularBand({ bands }) {
    return (
        <div className="PopularBand">
            <Card aria-live="polite" style={
                { width: '18rem' }}>
                <Card.Header> Popular Band </Card.Header>
                <Card.Img variant="top"
                    key={bands.id}
                    src={bands['url-for-image-thumb']}
                    alt="popularBandImageThumb" />
                <Card.Body >
                    <Card.Title key={bands.id}> {bands.name} </Card.Title>
                    <Card.Text> {bands.categories.category.name}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}