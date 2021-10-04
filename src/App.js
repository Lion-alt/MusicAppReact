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
  const [searchId, setSearchId] = useState(0)
  if (loadPage === 'BandById') {
    return (
      <>
      <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} setSearchId={setSearchId}></Navigation>
      <BandById bandId="4176" />
      </>
    )
  }
  if (loadPage === 'PopularBands') {
    return (
      <>
      <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} setSearchId={setSearchId}></Navigation>
      <MapPopularBands />
      </>
    )
  }
  if (loadPage === 'SearchBand') {
    if (searchText) {
      if (searchText.match(/{0-9}/)) {
        return (
          <>
          <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} setSearchId={setSearchId}></Navigation>
          <BandById bandId={searchId} />
          </>
        )
      }
      return (
        <>
        <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} setSearchId={setSearchId}></Navigation>
        <SearchBand searchText={searchText} />
        </>
      )
    }
  }
  return (
    <>
      <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} setSearchId={setSearchId}></Navigation>
      <Container>
        <BandById bandId="4176" />
        <MapPopularBands />
      </Container>
    </>
  )

}

export default App;
