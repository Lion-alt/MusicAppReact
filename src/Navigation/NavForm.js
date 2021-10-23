import { Nav } from 'react-bootstrap'
import SearchBandForm from '../SearchBandForm';
const NavForm = ({setSearchText}) => {
return (
<Nav className>
<SearchBandForm setSearchTextInNavigation={setSearchText} />
</Nav>
)
} 
export default NavForm