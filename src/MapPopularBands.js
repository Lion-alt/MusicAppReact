import {useState, useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import PopularBand from './PopularBand.js'
export default function MapPopularBands() {
    const [popularBands, setBand] = useState()
    useEffect(() => {
        fetch('popularBands.json', {
            'headers': {
                'Accept': 'application/json',
                'Authorization': 'Bearer YIGQRxu12ThvbJUWnDAPGjMBIESC'
            }
        }).then(response => response.json())
            .then(json => setBand(json.response.bands.band))
    }, []);

    if (popularBands === undefined) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    return popularBands.map(b => <PopularBand bands={b} />)
}