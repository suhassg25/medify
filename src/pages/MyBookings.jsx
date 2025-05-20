import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

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
        <Card key={idx} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography>Booking ID: {booking.id}</Typography>
            <Typography>Date: {booking.date}</Typography>
            <Typography>Time: {booking.time}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default MyBookings;
