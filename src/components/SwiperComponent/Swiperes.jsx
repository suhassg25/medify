import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "./Swipers.css"

export default function Swiperes({products}) {
    return (
        <div style={{padding:2, marginTop:10}}>
            <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
        >
           { products.map(i=><SwiperSlide> <img className="image" src={i} alt="images1" /></SwiperSlide>
)}
           
        </Swiper>
        </div>
    );
}