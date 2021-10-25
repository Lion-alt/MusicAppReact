import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import BandByIdWithGigs from './BandByIdWithGigs';
import FullScreenSpinner from '../FullScreenSpinner';
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
                'Authorization': 'Bearer v2tSmdqvKIEgmWA4VXFUH8OmXSkv'
            }
        }).then(response => response.json())
            .then(json => setgigsFromBand(json.response.performances.performance), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, [bandId]);



    if (loading) {
        return (
            <FullScreenSpinner />
        )
    }
    if (error) {
        return <p>An error occurred{alert('No gigs here :)')}</p >
    }
    return (
        <>
            <Container style={{display: 'flex', flexDirection: 'right', 'flexFlow': 'wrap' }}>
            <Row xs={1} md={2} lg={3} aria-live="polite" >
                 {
                    gigsFromBand?.map(gig => < BandByIdWithGigs key={"bandlist" + gig['stage-name']}
                        concert={gig} bandName={gig.band.name}
                    />)}
                    </Row>
            </Container>

        </>

    )
}