import React, { useEffect, useState } from "react";
import image from "../../assets/hospitalImage.png"
import Style from "./BookingCard.module.css"
import { Button } from "@mui/material";

const BookingCard = ({ item, slotBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState({});

  const toggleSlots = () => {
    setIsExpanded(!isExpanded);
  };

  const handle=(id, item, time) =>{
    setSelected({id, item, time});
  }

  useEffect(()=>{
    localStorage.setItem('booking', JSON.stringify(selected));
  }, [selected]);


  return (
    <div style={{ backgroundColor: 'rgba(239, 251, 255, 1)', padding: 20 }}>

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
          <div className={Style.slotCard}>
            <div className={Style.calender}>
              <button >Today<br /><span >11 Slots Available</span></button>
              <button>Tomorrow<br /><span >17 Slots Available</span></button>
              <button>Day After Tomarrow<br /><span >10 Slots Available</span></button>
            </div>

            <div style={{marginTop:20}}>
              {["Morning", "Afternoon", "Evening"].map((section, idx) => (
                <div key={idx} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:400}}>
                  <p >{section}</p>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:200}}>
                    {["11:30 AM", "12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
                      .slice(idx * 3, idx * 3 + 3)
                      .map((time, i) => (
                        <button
                        onClick={(e)=>{handle(item["Provider ID"], item, e.currentTarget.textContent)}}
                          key={i}
                        >
                          {time}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default BookingCard;
