import { Card } from 'react-bootstrap'
export default function PopularSingle({ single }) {
    console.log(single)

        return (
            <div className="PopularSingle">
            <Card aria-live="polite" style={
                { width: '18rem' }}>
                <Card.Header> Popular Single </Card.Header>
                <Card.Img variant="top"
                    key={single.id}
                    src={single['url_for_image_thumb']}
                    alt="popularSingleImageThumb" />
                <Card.Body >
                    <Card.Title key={single.id}> {single.title} </Card.Title>
                    <Card.Text>{single.band.categories[0].name}</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </div>
            )
}