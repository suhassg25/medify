import Styles from "./Navbar.module.css"
import Logo from "../../assets/medifyLogo.png"
import { Box, TextField, InputAdornment, Button, Select, MenuItem, InputLabel, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputBase from '@mui/material/InputBase';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Navbar() {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState('');
    const [state, setState] = useState([]);
    const [countries, setCountries] = useState([]);
    const [stateSelected, setStateSelected] = useState('State');
    const [city, setCity] = useState('City');

    const stateUrl = "https://meddata-backend.onrender.com/states";
    const countryUrl = "https://meddata-backend.onrender.com/cities/";

    const fetchState = async () => {
        try {
            const response = await fetch(stateUrl);
            setState(await response.json());
        } catch (e) {
            console.log(e)
        }
    }

    const fetchCity = async (state) => {
        if (state !== "State") {
            try {
                const response = await fetch(countryUrl + state);
                setCountries(await response.json());
            } catch (e) {
                console.log(e)
            }
        }
        else {
            setCountries([]);
            setCity('City');
            alert("Not selected proper State");
        }
    }

    useEffect(() => {
        fetchState();
    }, [stateSelected])


    return (
        <div>
            <p className={Styles.navbarHeading}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            <nav className={Styles.navbar}>
               <Link to="/">  <img className={Styles.logo} src={Logo} alt="medify-logo" /> </Link>

                <div className={Styles.navbarLinks}>
                    <div className={Styles.links}>
                        <button onClick={() => { setSelected('findDoctors'); setActive(true) }} >Find Doctors</button>
                        <button onClick={() => { setSelected('hospitals'); setActive(true) }} >Hospitals</button>
                        <button>Medicines</button>
                        <button>Surgeries</button>
                        <button>Software for Provider</button>
                        <button>Facilities</button>
                    </div>
                    <Button variant="contained">My Bookings</Button>
                </div>
            </nav>

            {active ?

                <div >
                    <div className={Styles.active}>
                        <span> My Bookings</span>
                    </div>
                    {selected === 'hospitals' ? (
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                borderRadius: '15px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                gap: '29px',
                                maxWidth: '780px',
                                maxHeight: "111px",
                                marginLeft: 80,
                                marginRight: 20,
                                padding: 2,
                                marginTop: '-33px',
                            }}
                        >
                            <TextField
                                placeholder="Seacrh by Hospitals"
                                size="small"
                                variant="outlined"
                                sx={{ borderRadius: '8px', width: 545, height: 50, border: 'none', outline: 'none' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon fontSize="small" color="disabled" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    width: 177,
                                    height: '40px',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    paddingX: '20px',
                                }}
                                startIcon={<SearchIcon />}
                            >
                                Search
                            </Button>


                        </Box>

                    ) :

                        selected === 'findDoctors' ? (<Box
                            sx={{
                                backgroundColor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '15px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                gap: '29px',
                                maxWidth: '1116px',
                                maxHeight: "111px",
                                margin: 'auto',
                                paddingLeft: "24px",
                                paddingRight: '24px',
                                marginTop: '-33px',
                            }}
                        >
                            <Select
                                labelId="state-select"
                                id="state"
                                value={stateSelected}
                                onChange={(e) => { setStateSelected(e.target.value); fetchCity(e.target.value); }}
                                sx={{ width: 340 }}
                                input={
                                    <OutlinedInput
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <LocationOnIcon fontSize="small" color="disabled" />
                                            </InputAdornment>
                                        }
                                        label="State"
                                    />
                                }
                            >
                                <MenuItem value="State" >State</MenuItem>
                                {state.map((item) => <MenuItem value={item}>{item}</MenuItem>)}


                            </Select>

                            <Select
                                labelId="city-select"
                                id="city"
                                value={city}
                                onChange={(e) => { setCity(e.target.value) }}
                                sx={{ width: 540 }}
                                input={
                                    <OutlinedInput
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <LocationOnIcon fontSize="small" color="disabled" />
                                            </InputAdornment>
                                        }
                                        label="City"
                                    />
                                }
                            >
                                <MenuItem value="City" >City</MenuItem>
                                {countries.map((item) => <MenuItem value={item}>{item}</MenuItem>)}


                            </Select>

                            <Button
                                variant="contained"
                                sx={{
                                    height: '40px',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    paddingX: '20px',
                                }}
                                startIcon={<SearchIcon />}
                            >
                                Search
                            </Button>

                        </Box>) :

                            <></>}

                </div> : <></>}


        </div>
    )
}

export default Navbar;