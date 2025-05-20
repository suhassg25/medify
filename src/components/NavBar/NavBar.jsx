import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Styles from "./Navbar.module.css"
import medifylogo from "../../assets/medifyLogo.png"

function Navbar() {

    return (
        <div>
            <p className={Styles.navbarHeading}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
           <AppBar position="static">
      <Toolbar className={Styles.navbar}>
        <img className={Styles.logo} src={medifylogo} alt="" />
        <Box sx={{ display: 'flex', gap: 2 }} className={Styles.navbarLinks}>
          <Button color="inherit" component={Link} to="/">Find Doctors</Button>
          <Button color="inherit">Hospitals</Button>
          <Button color="inherit">Medicines</Button>
          <Button color="inherit">Surgeries</Button>
          <Button color="inherit">Software Provider</Button>
          <Button color="inherit">Facilities</Button>
          <Button variant='contained' component={Link} to="/my-bookings">My Bookings</Button>
        </Box>
      </Toolbar>
    </AppBar>
        </div>
    )
}

export default Navbar;