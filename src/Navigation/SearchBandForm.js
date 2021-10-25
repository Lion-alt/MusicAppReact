import { Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react'
export default function SearchBandForm({ setSearchTextInNavigation }) {
    const [searchText, setSearchTextLocal] = useState('')
    const handleSearchSubmit = () => {
        if (searchText) {
            setSearchTextInNavigation(searchText)
        }
        else {
            alert("Please enter some search text!");
        }
    };

    return (
        <Form onSubmit={() => handleSearchSubmit()} className="mt-3">
            <InputGroup>
                <Form.Control
                    onChange={e => setSearchTextLocal(e.target.value)}
                    value={searchText}
                    id="search-form"
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Form.Label htmlFor="search-form" className="visually-hidden">Search</Form.Label>
                <InputGroup.Text onClick={() => handleSearchSubmit()} variant="outline-warning" aria-hidden="true" id="search-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </InputGroup.Text>
            </InputGroup>
        </Form>
    )
}