import { Nav, Navbar } from 'react-bootstrap'
import SearchBandForm from './SearchBandForm';
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Navigation({ setLoadPage, setSearchText }) {
  const [isOpen, setOpen] = useState(false)

  function handlePageChange(providedPage) {
    setLoadPage(providedPage)
  }

  return (
    <div>
       {/* // TODO https://www.youtube.com/watch?v=P4K4LCQavOU and implement burger menu */}
  
      <Navbar bg="primary" expand="lg" xs={10} md={20} xxl={100}>
        <Navbar.Brand>    <Hamburger aria-label="Show menu"
        toggled={isOpen}
        toggle={setOpen} /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={
            () => handlePageChange('BandById')
          }> BandById </Nav.Link>
          <Nav.Link onClick={
            () => handlePageChange('PopularBands')
          }> PopularBand </Nav.Link>
          <Nav.Link onClick={
            () => handlePageChange('SearchBand')
          }> SearchBand </Nav.Link>
          <Nav.Link onClick={
            () => handlePageChange('GigsbyBand')
          }> Gigs By Band </Nav.Link>
        </Nav>
        <Nav className="me-5">
        <SearchBandForm setSearchTextInNavigation={setSearchText} />
        </Nav>
      </Navbar>
    </div>
  )

}