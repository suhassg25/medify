import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "./Swipers.css"


export default function Swiperes({products, slides}) {
    return (
        <div style={{padding:2, marginTop:10}}>
            <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={slides}
        >
           { products.map(i=><SwiperSlide> <img className={slides===3 ? 'image' : "medspecial" } src={i} alt="images" /></SwiperSlide>
)}
           
        </Swiper>
        </div>
    );
}