import Style from "./Med.module.css"
import Swiperes from "../SwiperComponent/Swiperes";
import img1 from "../../assets/div.med-doctor-style-three.png"
import img2 from "../../assets/div.med-doctor-style-three (1).png"
import img3 from "../../assets/div.med-doctor-style-three (2).png"
import img4 from "../../assets/div.med-doctor-style-three (3).png"
import img5 from "../../assets/div.med-doctor-style-three (4).png"
import imag6 from "../../assets/19.png"
import imag7 from "../../assets/20.png"
import imag8 from "../../assets/21.png"
import imag9 from "../../assets/22.png"

function MedSpecialist(){
    const prods = [img1, img2, img3, img4, img5];
    return (<div id="medicalSpecialistSection">
    <div style={{height:'819px'}}> 
<h1 className={Style.heading}> Our Medical Specialist</h1>

    <Swiperes products={prods} slides={5} />
        </div>
        <div style={{height:598, display:'flex', justifyContent:'center', alignItems:'center', background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',}}>
        <img src={imag6} alt="" />
        </div>
        <div style={{height:677, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={imag7} alt="" />
        </div>
        <div style={{height:789, display:'flex', justifyContent:'center', alignItems:'center', background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',}}>
        <img src={imag8} alt="" style={{width:'100vw'}}/>
        </div>
        <div style={{height:708, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={imag9} alt="" />
        </div>
    </div>)

}
export default MedSpecialist;