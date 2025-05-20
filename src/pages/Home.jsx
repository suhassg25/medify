import { useState, useEffect } from 'react';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { getStates, getCities, getMedicalCenters} from '../utils/api';
import styles from './Home.module.css';
import BookingCard from "../components/BookingCard/BookingCard"

const Home = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [medicalCenters,setMedicalCenters] = useState([]);
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    getStates().then(setStates);
  }, []);

  useEffect(() => {
    if (selectedState) getCities(selectedState).then(setCities);
  }, [selectedState]);

  const handleSearch = async() => {
    const array = await getMedicalCenters(selectedState, selectedCity);
    setMedicalCenters(await array);
    setSearched(true)
  };

  return (
    <>
    <Container className={styles.container}>
      <h1>Find Medical Centers</h1>
      <div style={{display:'flex', width:'100vw', justifyContent:'center'}}>
        <Box id="state" className={styles.dropdown}>
        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select value={selectedState} onChange={e => setSelectedState(e.target.value)}>
            {states.map(state => <MenuItem key={state} value={state}>{state}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box id="city" className={styles.dropdown}>
        <FormControl fullWidth>
          <InputLabel>City</InputLabel>
          <Select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
            {cities.map(city => <MenuItem key={city} value={city}>{city}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Button id="searchBtn" type="submit" variant="contained" onClick={handleSearch}>
        Search
      </Button>
      </div>
    </Container>
    {searched ? <div className="hospitaList">
          <h1 style={{textAlign:'center'}}>  {medicalCenters.length} medical centers available in {selectedCity.toLowerCase()}</h1>
          {medicalCenters.map((center, index) => (
            <div key={index}>
              <BookingCard item={center} slotBooking/>
            </div>
          ))}

        </div> : <></>}
    </>
  );
};

export default Home;