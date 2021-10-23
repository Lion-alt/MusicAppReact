import MobileNavigation from './MobileNavigation.js';
import Navigation from './Navigation'
import classes from './NavBar.module.css'
export default function NavBar({ setLoadPage, setSearchText }) {

  return (
    <div className={classes.NavBar}>
       {/* // TODO https://www.youtube.com/watch?v=P4K4LCQavOU and implement burger menu */}
    <Navigation setLoadPage={setLoadPage} setSearchText={setSearchText} />
    <MobileNavigation setLoadPage={setLoadPage} setSearchText={setSearchText} />
    </div>
  )

}