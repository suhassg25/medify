import Style from "./Footer.module.css"
import Seek1 from "../../assets/SeekPng 1.png"
import Seek2 from "../../assets/SeekPng 2.png"
import Apple from "../../assets/apple_store.png.png"
import playStore from "../../assets/google_play.png.png"
import PhoneImage from "../../assets/PhoneImage.png"

function Footer() {
    return (
        <div className="footer">

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
        </div>
    )
}

export default Footer;