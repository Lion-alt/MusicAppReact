import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import MapGigsFromBand from './MapGigsFromBand';

export default function GigsByBand({ searchText }) {
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
            <>
                <Spinner animation="border"
                    role="status">
                    <span className="visually-hidden"> Loading... </span> </Spinner>
            </>
        )
    }
    if (error) {
        return <h1> Something went wrong. </h1>
    }
    return (
        <div className="GigsByBand">
            <Card style={
                { width: '19rem' }}>
                <Card.Body>
                    <MapGigsFromBand bandId={band.id}></MapGigsFromBand>
                </Card.Body>
            </Card>
        </div>
    )
}