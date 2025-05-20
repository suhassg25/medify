import Style from "./Hero.module.css"
import {Button} from  '@mui/material'
import hero from "../../assets/hero_image.png"
import Search from "../SearchResults/SearchResults"


function Hero( ) {

    return (
        <div>
        <div className={Style.hero}>
            <div style={{marginLeft:135}}>
                <div style={{}}>
                    <p className={Style.firstHeading}>Skip the travel! Find Online</p>
                    <p className={Style.secondHeading}> Medical <span style={{color : "rgb(42, 167, 255)"}}>Centers</span></p>
                </div>
                <div style={{marginBottom :"20px" }}>
                    <p className={Style.supportiveText}>Connect instantly with a 24x7 specialist or choose to </p>
                    <p className={Style.supportiveText}>video visit a particular doctor.</p>
                </div>
                <Button variant="contained" sx={{marginTop:"12px"}} onClick={()=>{window.reload()}}>Find Centers</Button>
            </div>
            <div >
                <img className={Style.image} src={hero} alt="" />
            </div>

        </div>
        </div>
    )

}

export default Hero;