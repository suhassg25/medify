import Search from "./SearchResults.module.css"
import { TextField, InputAdornment, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Hospital from "../../assets/Hospital.png"
import Ambulance from "../../assets/Ambulance.png"
import Capsule from "../../assets/Capsule.png"
import Labs from "../../assets/Drugstore.png"
import Doctor from "../../assets/Doctor.png"


function ImageCard({image, name}) {
  return (
    <div className={Search.imageHover} id={name} style={{width: 203, height: 190, display: "flex", flexDirection: "column", gap: 10, alignItems: "center", backgroundColor: "rgba(250, 251, 254, 1)"  }}>
      <img src={image} alt={name} />
      <p style={{ fontSize: 18, fontWeight: 400, letterSpacing: 2 }}>{name}</p>

    </div>
  )
}


function SearchResults() {

  const [state, setState] = useState('');
  const [city, setCity] = useState('')

  const images = [Doctor, Labs, Hospital, Capsule, Ambulance];
  const imageNames = ["Doctors", "Labs", "Hospitals", "Medical Store", "Ambulance"];

  return (

    <div className={Search.searchBox}>
      <div className={Search.searchInputs}>
        <TextField
          id="state"
          placeholder="State"
          variant="outlined"
          value={state}
          onChange={(e) => { setState(e.target.value) }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="city"
          placeholder="City"
          variant="outlined"
          value={city}
          onChange={(e) => { setCity(e.target.value) }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" startIcon={<SearchIcon />} >Search </Button >

      </div>

      <div className={Search.iconsGroup}>
        <p className={Search.para}>You may be looking for</p>
        <div className={Search.icons}>
            {images.map((item, index)=>{
              return <ImageCard image={item} name={imageNames[index]} key={index}/>
            })}
        </div>

      </div>

    </div>


  )


}
export default SearchResults;