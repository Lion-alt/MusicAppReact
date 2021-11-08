import './App.css';
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import BandById from './band/BandById.js'
import MapPopularBands from './band/MapPopularBands.js'
import { useState } from 'react'
import NavBar from './Navigation/NavBar.js'
import SearchBand from './band/SearchBand';
import GigsByBand from './band/GigsByBand';
import MapGigsFromBand from './band/MapGigsFromBand';
import MapPopularSingles from './single/MapPopularSingles';
import classes from './App.css'

function App() {
    const [loadPage, setLoadPage] = useState()
    const [searchText, setSearchText] = useState('')
    if (loadPage === 'PopularSingles') {
        return (
            <div>
            <NavBar 
              setLoadPage={setLoadPage}
              setSearchText={setSearchText} 
              > 
            </NavBar> 
            <div style={{'height': '10vh'}}></div>
            <Container className={classes.margin}>
                <h1> Popular Singles </h1>
                <MapPopularSingles />
            </Container></div>

        )
    }
    if (loadPage === 'BandById') {
        if (searchText) {
            if (isSearchTextNumber(searchText)) {
                // if Text is id
                return (
                    <>
                        <NavBar setLoadPage={setLoadPage}
                            setSearchText={setSearchText} > </NavBar>
                            <div style={{'height': '10vh'}}></div>
                        <Container className={classes.margin}>
                            <BandById bandId={searchText}
                            />
                        </Container>
                    </>
                )
            }
        }
    }
    if (loadPage === 'PopularBands') {
        return (
            <>
                <NavBar setLoadPage={setLoadPage}
                    setSearchText={setSearchText} >
                </NavBar>
                <div style={{'height': '10vh'}}></div>
                <Container className={classes.margin}>
                    <h1 > Popular Bands </h1>
                    <MapPopularBands />
                </Container>
            </>
        )
    }
    if (loadPage === 'SearchBand') {
        if (searchText) {
            if (isSearchTextNumber(searchText)) {
                // if Text is id
                return (
                    <>
                        <NavBar setLoadPage={setLoadPage}
                            setSearchText={setSearchText} > </NavBar>
                            <div style={{'height': '10vh'}}></div>
                        <Container className={classes.margin}>
                            <BandById bandId={searchText}
                            />
                        </Container>
                    </>
                )
            }
            return (
                <>
                    <NavBar setLoadPage={setLoadPage}
                        setSearchText={setSearchText} > </NavBar>
                        <div style={{'height': '10vh'}}></div>
                    <Container className={classes.margin}>
                        <SearchBand searchText={searchText}
                        /> </Container>
                </>
            )
        }
    }
    if (loadPage === 'GigsbyBand') {
        if (searchText) {
            if (isSearchTextNumber(searchText)) {
                return (
                    <>
                        <NavBar setLoadPage={setLoadPage}
                            setSearchText={setSearchText} > </NavBar>
                            <div style={{'height': '10vh'}}></div>
                        <Container className={classes.margin}>
                            <MapGigsFromBand bandId={searchText} />
                        </Container>
                    </>
                )
            }
            return (
                <> < NavBar setLoadPage={setLoadPage}
                    setSearchText={setSearchText} > </NavBar>
                    <div style={{'height': '10vh'}}></div>
                    <Container style={{ display: 'flex', flexDirection: 'right', 'flexFlow': 'wrap' }} className={classes.margin}>
                        <GigsByBand searchText={searchText} />
                    </Container>
                </ >
            )
        }
    }
    return (
        <>
            <NavBar setLoadPage={setLoadPage}
                setSearchText={setSearchText} > </NavBar>
                <div style={{'height': '10vh'}}></div>
            <Container className={classes.margin}>
                <Row >
                    <BandById bandId="4176" />
                </Row> <h2 > Popular Bands </h2>
                <MapPopularBands />
            </Container>
        </>
    )

}

function isSearchTextNumber(searchText) {
    if(searchText.match(/[0-9]/)) {
        return true
    } 
    return false
}

export default App;