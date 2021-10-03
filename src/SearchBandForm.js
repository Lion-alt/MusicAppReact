import { Form, FormControl, Button } from 'react-bootstrap'
import { useState } from 'react'
export default function SearchBandForm({setSearchTextInNavigation}) {
    const [searchText, setSearchTextLocal] = useState()
    const handleSearchSubmit = () => {
        if(searchText) {
        setSearchTextInNavigation(searchText)
        }
        else {
            alert("Please enter some search text!");
        }
    };

    return (
        <Form inline>
            <FormControl
                onChange={e => setSearchTextLocal(e.target.value)}
                value={searchText}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
            />
            <Button onClick={() => handleSearchSubmit()} variant="outline-info">
                Search
            </Button>
        </Form>
    )
}