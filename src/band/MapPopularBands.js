import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import FullScreenSpinner from '../FullScreenSpinner.js'
import PopularBand from './PopularBand.js'
export default function MapPopularBands() {
    const [popularBands, setBand] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abortHandler = new AbortController()
        fetch('https://api.srgssr.ch/mx3/v2/bands/popular', {
            signal: abortHandler.signal,
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer ykDwfwGVX1Z3GFZLnuqTbgKFakGn'
            }
        }).then(response => response.json())
            .then(json => setBand(json.response.bands.band), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, []);

    if (loading) {
        return (
            <FullScreenSpinner />
        )
    }

    if (error) {
        return <p>An error occurred</p>
    }
    return ( /* Stack the columns on mobile by making one full-width and the other half-width */
        <Container style={{display: 'flex', flexDirection: 'right', 'flexFlow': 'wrap' }}>
                                  <Row aria-live="polite" xs={1} md={2} lg={3}>
{
                      popularBands.map((band) => 
                          < PopularBand  key={"bandlist" + band.name}
                          bands={band}
                      />
                   )}
                   </Row>

        </Container>
    )

}
  
