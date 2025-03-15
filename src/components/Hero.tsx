import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      sx={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold">
          How Shipping Saint Logistics Services Works
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          We Take Care Of The Shipping Part Of Your Business. So You’re Free To Focus On Growing Your Company.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
