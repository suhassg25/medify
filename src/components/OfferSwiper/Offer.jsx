import img1 from "../../assets/Group 10.png"
import img2 from "../../assets/Group 11.png"
import Swiperes from "../SwiperComponent/Swiperes";


function Offer(){
    const obj = [img1, img2, img1, img2, img1, img2, img1, img2, img1];
    return (<div id="offerSection" style={{height:250}}>
        <Swiperes products={obj} slides={3}/>
    </div>)
}

export default Offer;