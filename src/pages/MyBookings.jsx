import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import BookingCard from '../components/BookingCard/BookingCard';

const MyBookings = ({hospital}) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(stored);
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>My Bookings</Typography>
      {bookings.map((booking, idx) => (
         <BookingCard item={booking.item} slotBooking={false} booked={booking}/>
      ))}
    </Container>
  );
};

export default MyBookings;
