import { Navbar, Nav } from 'react-bootstrap'
import SearchBandForm from './SearchBandForm';
export default function Navigation({setLoadPage, setSearchText}) {
    function handlePageChange (providedPage) {
        setLoadPage(providedPage)
    }
    return (
        <div>
        <Navbar bg="dark" variant="dark" xs={6}  md={12} xxl={20}>
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handlePageChange('BandById')}>BandById</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('PopularBands')}>PopularBand</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('SearchBand')}>SearchBand</Nav.Link>
          </Nav>
          <SearchBandForm setSearchTextInNavigation={setSearchText}/>
        </Navbar>
        </div>
    )

}