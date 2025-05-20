import Style from "./Footer.module.css"
import Seek1 from "../../assets/SeekPng 1.png"
import Seek2 from "../../assets/SeekPng 2.png"
import Apple from "../../assets/apple_store.png.png"
import playStore from "../../assets/google_play.png.png"
import Vector from "../../assets/Vector.png"
import { Button } from "@mui/material"
import { useState } from "react"
import footer from "../../assets/Footer.png"

function Footer() {
    const [number, setNumber] = useState('')
    return (
       <>
        <div className={Style.footer}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className={Style.download}>
                    <div className={Style.firstSmall}>
                        <img style={{ width: 302, height: 427, }} src={Seek1} alt="" />
                        <div className={Style.small} ></div>
                    </div>
                    <div className={Style.secondLarge}>
                        <img style={{ width: 302, height: 503, }} src={Seek2} alt="" />
                        <div className={Style.large} ></div>
                    </div>
                </div>
                <img src={Vector} alt="" style={{marginTop:22}}/>
                <div>
                    <p className={Style.heading}>Download the</p>
                    <p className={Style.heading}> <span className={Style.span}>Medify</span> App</p>
                    <p className={Style.linkHeading}>Get the link to download the app</p>
                    <div>
                    <span style={{display:'flex', alignItems:'center',justifyContent:'space-between', backgroundColor:'white', width:350, height:34}}>
                        <span>
                            +91 <span style={{color:'gray', fontSize:25}}> | </span>
                        </span>
                        <input type="text" value={number} style={{ width:200, borderLeftColor : 'gray', border:'none'}} onChange={(e)=>setNumber(e.target.value)}/>
                    <Button variant="contained"> Send SMS</Button>
                    </span>
                    </div>
                    <div className={Style.icon}>
                        <img src={playStore} alt="" />
                        <img src={Apple} alt="" />
                    </div>
                </div>
            </div>
        </div>
                 <img src={footer} alt="" style={{width:'100vw'}}/>
       </>
    )
}

export default Footer;