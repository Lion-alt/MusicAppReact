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
        return <h1> Something went wrong. </h1>
    }
    return (
        <>
            <Container>
                <Card.Header>Band With Id {bandId}</Card.Header>
                <Row> {
                    gigsFromBand?.map(gig => < BandByIdWithGigs key={"bandlist" + gig.name}
                        concert={gig} bandName={gig.band.name}
                    />)}
                </Row>
            </Container>

        </>

    )
}