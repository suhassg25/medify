import Style from "./Specialist.module.css"
import image1 from "../../assets/Speacialist/Frame 1000011411.png"
import image2 from "../../assets/Speacialist/Frame 1000011411 (1).png"
import image3 from "../../assets/Speacialist/Frame 1000011411 (2).png"
import image4 from "../../assets/Speacialist/Frame 1000011411 (3).png"
import image5 from "../../assets/Speacialist/Frame 1000011411 (4).png"
import image6 from "../../assets/Speacialist/Frame 1000011411 (5).png"
import image7 from "../../assets/Speacialist/Frame 1000011411 (6).png"
import image8 from "../../assets/Speacialist/Frame 1000011411 (7).png"
import { Button } from "@mui/material"



function ImageCard({image}) {
  return (
    <div className={Style.imageHover} style={{width: 203, height: 190, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(250, 251, 254, 1)", marginBottom :20  }}>
        <img src={image} alt="" />
    </div>
  )
}

function Specialist(){
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
return(
    <div className={Style.specialist} id="specialistSection">
        <h3 className={Style.heading}>Find by specialisation</h3>
        <div className={Style.icons}>
        {images.map((item,index)=>{
           return <ImageCard key={index} image={item}/>
        })}
        </div>
        <Button variant="contained" sx={{width:147, marginLeft:'45%', marginTop:4}}> View All </Button>
    </div>
)

}
export default Specialist;