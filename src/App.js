import './App.css';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import BandById from './band/BandById.js'
import MapPopularBands from './band/MapPopularBands.js'
import { useState } from 'react'
import Navigation from './Navigation.js'

function App() {
  const [loadPage, setLoadPage] = useState()
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
return (
  <Container>
    <Navigation setLoadPage={setLoadPage}></Navigation>
    <BandById bandId="4176" />
    <MapPopularBands />
  </Container>
)
  
}

export default App;
