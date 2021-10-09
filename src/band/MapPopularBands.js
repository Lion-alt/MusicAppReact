import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import PopularBand from './PopularBand.js'
export default function MapPopularBands() {
    const [popularBands, setBand] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abortHandler = new AbortController()
        fetch('popularBands.json', {
                signal: abortHandler.signal,
                'headers': {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer YIGQRxu12ThvbJUWnDAPGjMBIESC'
                }
            }).then(response => response.json())
            .then(json => setBand(json.response.bands.band), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, []);

    if (loading) {
        return ( <
            Spinner animation = "border"
            role = "status" >
            <
            span className = "visually-hidden" > Loading... < /span> < /
            Spinner >
        )
    }

    if (error) {
        return <p > An error occurred < /p>
    }
    return ( /* Stack the columns on mobile by making one full-width and the other half-width */ <
            Container >
            <
            Row >
            <
            Col xs = { 12 }
            md = { 14 }
            xxl = { 16 } > {
                this.popularBands.map(band => < PopularBand key = { "bandlist" + band.name }
                    bands = { band }
                    />)} < /
                    Col > <
                    /Row> < /
                    Container >
                )
            }