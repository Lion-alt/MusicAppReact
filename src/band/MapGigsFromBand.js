import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Card, Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import BandByIdWithGigs from './BandByIdWithGigs';
export default function MapGigsFromBand({ bandId }) {
    const [gigsFromBand, setgigsFromBand] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const abortHandler = new AbortController()
        fetch('https://api.srgssr.ch/mx3/v2/bands/' + bandId + '/gigs', {
            signal: abortHandler.signal,
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer vkVujGtvHIv0QYseZmSLQie8GLYd'
            }
        }).then(response => response.json())
            .then(json => setgigsFromBand(json.response.performances.performance), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, [bandId]);



    if (loading) {
        return (
            <Spinner animation="border"
                role="status">
                <span className="visually-hidden"> Loading... </span>
            </Spinner>
        )
    }
    if (error) {
        return <p>An error occurred{alert('No gigs here :)')}</p >
    }
    return (
        <>
            <Container style={{display: 'flex', flexDirection: 'right', 'flex-flow': 'wrap' }}>
                 {
                    gigsFromBand?.map(gig => <Row>< BandByIdWithGigs key={"bandlist" + gig.name}
                        concert={gig} bandName={gig.band.name}
                    /></Row>)}
            </Container>

        </>

    )
}