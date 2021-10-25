import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import MapGigsFromBand from './MapGigsFromBand';
import FullScreenSpinner from '../FullScreenSpinner';

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
                'Authorization': 'Bearer dDaIzIKbTe4EYc2keXv6w0KGv31u'
            }
        }).then(response => response.json())
            .then(json => setBand(json.response.bands[0]), e => setError(e))
            .finally(() => setLoading(false))
        return () => abortHandler.abort()
    }, [searchText]);



    if (loading) {
        return (
            <FullScreenSpinner />
        )
    }
    if (error) {
        return  alert('Your band doesn`t have gigs')
    }
    return (
        <div style={{display: 'flex', flexDirection: 'right', 'flexFlow': 'wrap' }} className="GigsByBand">
                    <MapGigsFromBand bandId={band.id}></MapGigsFromBand>
        </div>
    )
}