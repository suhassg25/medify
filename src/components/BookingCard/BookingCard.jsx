import React, { useEffect, useState } from "react";
import image from "../../assets/hospitalImage.png"
import Style from "./BookingCard.module.css"
import { Button } from "@mui/material";
import BookingPage from "../../pages/BookingPage";

const BookingCard = ({ item, slotBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSlots = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ backgroundColor: 'rgba(239, 251, 255, 1)', padding: 20, width:'100vw', display:'flex', justifyContent:'center', flexDirection:'column' }}>

      <div className={Style.hospitaCard}>
        <div className={Style.contents}>
          <div className={Style.image}>
            <img
              src={image}
              alt="Hospital Icon"
              className="w-16 h-16"
            />
          </div>

          <div className="flex-1">
            <h3 className={Style.heading}>
              {item["Hospital Name"]}
            </h3>
            <p className={Style.subHeading}>
              {item.Address}<br />
            </p>
            <span className={Style.span}>Smilesecure Center for Advanced Dentistry +1</span> <br />
            <span className={Style.span}> more </span>

            <div style={{ display: 'flex', gap: 2, marginTop: 2, alignItems: 'center' }}>
              <span className={Style.free}>FREE</span>
              <span className={Style.number}>₹500</span>
              <span className={Style.consult}>Consultation fee at clinic</span>
            </div>


          </div>
          {slotBooking ? <div style={{ width: '236px', height: '221px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
            <p className={Style.free}>Available Today</p>

            <Button variant="contained" onClick={toggleSlots}> {isExpanded ? "Hide Slots" : "Book FREE Center Visit"} </Button>
          </div>: <></>}
        </div>
      </div>
      {isExpanded && (
          <BookingPage item={item}/>
        )}
    </div>
  );
};

export default BookingCard;
