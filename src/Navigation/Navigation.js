import NavComponents from './NavComponents.js'
import classes from './NavBar.module.css'
const Navigation = ({setLoadPage, setSearchText}) => {
    return ( <nav className={classes.Navigation}>
        <NavComponents setLoadPage={setLoadPage} setSearchText={setSearchText}/>
    </nav> )
}
export default Navigation