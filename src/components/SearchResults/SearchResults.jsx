import Search from "./SearchResults.module.css"
import { TextField, InputAdornment, Button, Box } from "@mui/material"
import { Select, MenuItem, InputLabel, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from "react";
import Hospital from "../../assets/Hospital.png"
import Ambulance from "../../assets/Ambulance.png"
import Capsule from "../../assets/Capsule.png"
import Labs from "../../assets/Drugstore.png"
import Doctor from "../../assets/Doctor.png"
import BookingCard from "../BookingCard/BookingCard"

function ImageCard({ image, name }) {
  return (
    <div className={Search.imageHover} id={name} style={{ width: 203, height: 190, display: "flex", flexDirection: "column", gap: 10, alignItems: "center", backgroundColor: "rgba(250, 251, 254, 1)" }}>
      <img src={image} alt={name} />
      <p style={{ fontSize: 18, fontWeight: 400, letterSpacing: 2 }}>{name}</p>

    </div>
  )
}


function SearchResults() {

  const [state, setState] = useState([]);
  const [countries, setCountries] = useState([]);
  const [stateSelected, setStateSelected] = useState('State');
  const [city, setCity] = useState('City');
  const [centers, setCenters] = useState([]);
  const [searched, setSearched] = useState(false);

  const stateUrl = "https://meddata-backend.onrender.com/states";
  const countryUrl = "https://meddata-backend.onrender.com/cities/";

  const fetchState = async () => {
    try {
      const response = await fetch(stateUrl);
      setState(await response.json());
      console.log(await response.json())
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
    }
    
  }

  useEffect(() => {
    fetchState();
  }, [stateSelected])

  const images = [Doctor, Labs, Hospital, Capsule, Ambulance];
  const imageNames = ["Doctors", "Labs", "Hospitals", "Medical Store", "Ambulance"];

  useEffect(() => {
    fetch(`https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${city}`)
      .then((res) => res.json())
      .then(setCenters);
      
  }, [stateSelected, city]);

  return (

    <div className={!searched ? Search.searchBox : Search.searchHospitals}>
      {!searched ? <div>
        <div className={Search.searchInputs}>
          <Box
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
              onChange={(e) => { setCity(e.target.value)}}
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

            <Button variant="contained"  type="submit" id="searchBtn" startIcon={<SearchIcon />} onClick={() => {
              setSearched(true);
            }}>Search </Button >
          </Box>

        </div>

        <div className={Search.iconsGroup}>
          <p className={Search.para}>You may be looking for</p>
          <div className={Search.icons}>
            {images.map((item, index) => {
              return <ImageCard image={item} name={imageNames[index]} key={index} />
            })}
          </div>

        </div>
      </div> :
        <div className="hospitaList">
          {localStorage.setItem("searched", 'true')}
          <h1> {centers.length} medical centers available in {city.toLowerCase()}</h1>
          {centers.map((center, index) => (
            <div key={index}>
              <BookingCard item={center} slotBooking/>
            </div>
          ))}

          {document.getElementById('offerSection').hidden=true}
          {document.getElementById('specialistSection').hidden=true}
          {document.getElementById('medicalSpecialistSection').hidden=true}
        </div>}
          


    </div>


  )


}
export default SearchResults;