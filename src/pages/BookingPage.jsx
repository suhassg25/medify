import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import dayjs from 'dayjs';

const BookingPage = ({item}) => {
  const  id  = item['Provider ID'];
  const navigate = useNavigate();
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [time, setTime] = useState('Morning');

  const handleBook = () => {
    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
    existing.push({id, date, time, item });
    localStorage.setItem('bookings', JSON.stringify(existing));
    navigate('/my-bookings');
  };

  return (
    <Container sx={{marginLeft:18, background:'white', width:770, marginTop:-2}}>
      <Typography variant="h4" gutterBottom>Book Appointment</Typography>
      <Typography>Select Date:</Typography>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} min={dayjs().format('YYYY-MM-DD')} max={dayjs().add(7, 'day').format('YYYY-MM-DD')} />
      <Typography>Select Time:</Typography>
      <Grid container spacing={2}>
        {['Morning', 'Afternoon', 'Evening'].map(t => (
          <Grid item key={t}>
            <Button variant={t === time ? 'contained' : 'outlined'} onClick={() => setTime(t)}><p>{t}</p></Button>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={handleBook}>Confirm Booking</Button>
    </Container>
  );
};

export default BookingPage;