import { useState, useEffect } from 'react'
import FullScreenSpinner from '../FullScreenSpinner.js'
import PopularSingle from './PopularSingle.js'

import { Container, Row} from 'react-bootstrap'
export default function MapPopularSingles() {
    const [popularSingles, setPopularSingles] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const abortHandler = new AbortController()
        fetch('https://api.srgssr.ch/mx3/v2/singles/popular', {
            signal: abortHandler.signal,
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer bL2WCQIoY6c2Cac53NKtHSwDoklz'
            }
        }).then(response => response.json())
            .then(json => setPopularSingles(json.response.playlist.singles), e => setError(e))
            .finally(() => {
                setLoading(false)
            })
        return () => abortHandler.abort()
    }, []);

    if (loading) {
        return (
            <FullScreenSpinner />
        )
    }
    if (error) {
        return <p>An error occurred </p>
    }
    console.log('Rendering')
    return (
        <Container style={{ display: 'flex', flexDirection: 'right', 'flexFlow': 'wrap' }}>
            <Row aria-live="polite" xs={1} md={2} lg={3}>
                { 
                popularSingles.map((single) =>  <div key={single.id}>
                    <PopularSingle single={single} />
                    </div>
                )
   
                }
            </Row>
        </Container>
    )
}