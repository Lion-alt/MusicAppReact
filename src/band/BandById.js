import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import FullScreenSpinner from '../FullScreenSpinner';
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
                'Authorization': 'Bearer v2tSmdqvKIEgmWA4VXFUH8OmXSkv'
            }
        }).then(response => response.json())
            .then(json => setBand(json.response.band), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, [bandId]);

    if (loading) {
        return (
            <FullScreenSpinner />
        )
    }
    if(error) {
        return <p>An error occurred </p>
    }
    return (
        <div className="BandById">
            <Card style={{ width: '18rem' }}>
                <Card.Header>Band with id {bandId}</Card.Header>
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