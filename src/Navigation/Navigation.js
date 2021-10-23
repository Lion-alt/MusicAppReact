import NavLinks from './NavLinks.js'
import NavForm from './NavForm.js'
import classes from './NavBar.module.css'
const Navigation = ({setLoadPage, setSearchText}) => {
    return ( <nav className={classes.Navigation}>
        <NavLinks setLoadPage={setLoadPage} setSearchText={setSearchText}/>
    </nav> )
}
export default Navigation