import {Nav} from 'react-bootstrap'
import SearchBandForm from './SearchBandForm';
import {Spin as Hamburger} from 'hamburger-react'

export default function Navigation({setLoadPage, setSearchText}) {
    const [isOpen, setOpen] = useState(false)

    function handlePageChange(providedPage) {
        setLoadPage(providedPage)
    }

    return (<
        div>
        <
            Hamburger aria - label = "Show menu"
        toggled={isOpen}
        toggle={setOpen}>
    <
        /Hamburger>
    <
        Hamburger onToggle={
        toggled => {
            if (toggled) {
                <
                    Nav className="ml-auto">
                    <
                        Nav.Link onClick={
                        () => handlePageChange('BandById')
                    }> BandById < /Nav.Link> <
                    Nav.Link onClick={
                    () => handlePageChange('PopularBands')
                }> PopularBand < /Nav.Link> <
                    Nav.Link onClick={
                    () => handlePageChange('SearchBand')
                }> SearchBand < /Nav.Link> <
                    Nav.Link onClick={
                    () => handlePageChange('GigsByBand')
                }> Gigs By Band < /Nav.Link> < /
                    Nav>
                <
                    SearchBandForm setSearchTextInNavigation={setSearchText}
                />
            } else {

            }
        }
    }> < /Hamburger>
<
       /div>
)

}