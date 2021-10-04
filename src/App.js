import './App.css';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import BandById from './band/BandById.js'
import MapPopularBands from './band/MapPopularBands.js'
import { useState } from 'react'
import Navigation from './Navigation.js'
import SearchBand from './band/SearchBand';

function App() {
  const [loadPage, setLoadPage] = useState()
  const [searchText, setSearchText] = useState('')
  if (loadPage === 'BandById') {
    return (
      <>
        <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText}></Navigation>
        <Container>
          <h1>Band by Id</h1>
          <BandById bandId="4176" />
        </Container>
      </>
    )
  }
  if (loadPage === 'PopularBands') {
    return (
      <>
        <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText}></Navigation>
        <Container>
          <h1>Popular Bands</h1>
          <MapPopularBands />
        </Container>
      </>
    )
  }
  if (loadPage === 'SearchBand') {
    if (searchText) {
      if (searchText.match(/[0-9]{4}/)) {
        // if Text is id
        return (
          <>
            <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText}></Navigation>
            <Container>
              <BandById bandId={searchText} />
            </Container>
          </>
        )
      }
      return (
        <>
          <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText}></Navigation>
          <Container>
            <SearchBand searchText={searchText} />
          </Container>
        </>
      )
    }
  }
  return (
    <>
      <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} ></Navigation>
      <Container>
        <BandById bandId="4176" />
        <h2>Popular Bands</h2>
        <MapPopularBands />
      </Container>
    </>
  )

}

export default App;
