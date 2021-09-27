import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap'
import { useState } from 'react'
export default function Navigation({setLoadPage}) {
    const [searchText, setSearchText] = useState()
    function handlePageChange (providedPage) {
        setLoadPage(providedPage)
    }
    const handleSearchSubmit = () => {
        if (searchText) {
          this.props.history.push({
            pathname: "/results",
            state: {
              searchText: this.searchText
            }
          });
        } else {
          alert("Please enter some search text!");
        }
      };


    return (
        <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handlePageChange('BandById')}>BandById</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('PopularBands')}>PopularBand</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onChange={e => setSearchText(e.target.value)}
              value={searchText}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={() => handleSearchSubmit()} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar>
        </div>
    )

}