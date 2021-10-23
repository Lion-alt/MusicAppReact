import NavLinks from './NavLinks.js'
import NavForm from './NavForm.js'
import classes from './NavBar.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'
import { useState } from 'react'
export default function MobileNavigation ({ setLoadPage, setSearchText}) {
    const [open, setOpen] = useState(false)
    const HamburgerIcon =         <CgMenuRound className={classes.Hamburger} size="40px" color="white" onClick={() => setOpen(!open)} />
    const closeIcon =  <CgClose className={classes.Hamburger} size="40px" color="white" onClick={() => setOpen(!open)} />
    const closeMobileMenu = () => setOpen(false)
     return (<nav className={classes.MobileNavigation}>
         {open ? closeIcon :HamburgerIcon}
     {open && <NavLinks  setLoadPage={setLoadPage} setSearchText={setSearchText} isMobile={true} closeMobileMenu={closeMobileMenu} />}
     </nav>)
}