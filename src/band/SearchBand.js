import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import BandById from './BandById';
export default function SearchBand({ searchText }) {
    const [band, setBand] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const abortHandler = new AbortController()
        fetch('https://api.srgssr.ch/mx3/v2/bands?query=' + searchText, {
            signal: abortHandler.signal,
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer 006tF9SxIJTorS87gUbU3vBUfH6k'
            }
        }).then(response => response.json())
            .then(json => setBand(json.response.bands[0]), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, [searchText]);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    if (error) {
        return <p>An error occurred{alert('The searched band doesn`t exist')}</p> 
    }
    return (
        <div className="SearchBand">
            <h1>Search Band</h1>
            <Card style={{ width: '19rem' }}>
            <Card.Header>Band With Name CATALYST equals</Card.Header>
                <Card.Body>
                    <BandById bandId={band.id} />
                    <Card.Text>{band.biographies[0].description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
