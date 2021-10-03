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
  const [searchId, setSearchId] = useState()
  if (loadPage === 'BandById') {
    return (
      <BandById bandId="4176" />
    )
  }
  if (loadPage === 'PopularBands') {
    return (
      <MapPopularBands />
    )
  }
  if (loadPage === 'SearchBand') {
    if (searchText) {
      /* if (searchId.typeof === 'number') {
        return (
          <BandById bandId={searchId} />
        )
      } */
      return (
        <SearchBand searchText={searchText} />
      )
    }
  }
  return (
    <Container>
      <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} setSearchId={setSearchId}></Navigation>
      <BandById bandId="4176" />
      <MapPopularBands />
    </Container>
  )

}

export default App;
