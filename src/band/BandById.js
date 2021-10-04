import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
export default function BandById({ bandId }) {
    const [band, setBand] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const abortHandler = new AbortController()
        fetch('https://api.srgssr.ch/mx3/v2/bands/' + bandId, {
            signal: abortHandler.signal,
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer r7ux3zaMsYj2C8Bf6xWVYN1Hjdus'
            }
        }).then(response => response.json())
            .then(json => setBand(json.response.band), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, [bandId]);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    if(error) {
        return <p>An error occurred</p>
    }
    return (
        <div className="BandById">
            <Card style={{ width: '18rem' }}>
                <Card.Header>Band with id 4176</Card.Header>
                <Card.Img variant="top" src={band['url-for-image-thumb']} alt="band-image-thumb" />
                <Card.Body>
                    <Card.Title>{band.name}</Card.Title>
                    <Card.Text>
                        {band.categories.category.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}