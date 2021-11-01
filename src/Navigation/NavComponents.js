import { Nav } from 'react-bootstrap'
import classes from './NavBar.module.css'
import { motion } from 'framer-motion'
import SearchBandForm from './SearchBandForm';
export default function NavLinks({ setLoadPage, isMobile, closeMobileMenu, setSearchText }) {
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }
    function handlePageChange(providedPage) {
        setLoadPage(providedPage)
    }
    return (<Nav className={classes.NavLinks}>
        <motion.li
            onClick={() => isMobile && closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
        >
            <Nav.Link className={classes.NavLink} onClick={
                () => handlePageChange('BandById')
            }> SearchBandById </Nav.Link>
        </motion.li>
        <motion.li
            onClick={() => isMobile && closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.10 }}
        >
            <Nav.Link className={classes.NavLink} onClick={
                () => handlePageChange('PopularBands')
            }> PopularBand </Nav.Link>
        </motion.li>
        <motion.li
            onClick={() => isMobile && closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.20 }}
        >
            <Nav.Link className={classes.NavLink} onClick={
                () => handlePageChange('SearchBand')
            }> SearchBand </Nav.Link>
        </motion.li>
        <motion.li
            onClick={() => isMobile && closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.30 }}
        >
            <Nav.Link className={classes.NavLink} onClick={
                () => handlePageChange('GigsbyBand')
            }> Gigs By Band </Nav.Link>
        </motion.li>
        <motion.li
            onClick={() => isMobile && closeMobileMenu()}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.40 }}>
            <Nav.Link className={classes.NavLink} onClick={
                () => handlePageChange('PopularSingles')
            }> Popular Singles </Nav.Link>
        </motion.li>
        <SearchBandForm setSearchTextInNavigation={setSearchText} className={classes.SearchForm} />
    </Nav>)
}