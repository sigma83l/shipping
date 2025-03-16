import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState } from "react";

const WriteUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    department: "",
    issue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Box sx={styles.backgroundContainer}>
      {/* Semi-transparent overlay */}
      <Box sx={styles.overlay} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Contact Info Section */}
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {/* Address Card */}
          <Grid item xs={12} sm={12} md={12}>
            <Box sx={styles.card}>
              <LocationOnIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Typography variant="h6" sx={styles.title}>Our Address</Typography>
              <Typography variant="body1">
                34th St, Park Triangle Corporate Center, Taguig Metro Manila.
              </Typography>
            </Box>
          </Grid>

          {/* Email & Phone Cards */}
          <Grid item xs={12} sm={6}>
            <Box sx={styles.card}>
              <EmailIcon sx={{ fontSize: 30, color: "#1976d2" }} />
              <Typography variant="h6" sx={styles.title}>Email Us</Typography>
              <Typography variant="body2" sx={{ color: "#1976d2", cursor: "pointer" }}>
                Write Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.card}>
              <PhoneIcon sx={{ fontSize: 30, color: "#1976d2" }} />
              <Typography variant="h6" sx={styles.title}>Call Us</Typography>
              <Typography variant="body2">639457417005</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Form Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Fill The Fields Below, We Respond Timely
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email ID"
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Select Department"
                  name="department"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Issue / Concern"
                  name="issue"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" sx={styles.continueBtn}>
              Continue
            </Button>
          </form>
        </Box>

        {/* Scroll-to-Top Button */}
        <Box sx={styles.scrollTop}>
          <ArrowUpwardIcon />
        </Box>
      </Container>
    </Box>
  );
};

// Styles
const styles = {
  backgroundContainer: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: "url('/img1.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent overlay
  },
  card: {
    backgroundColor: "#fff",
    textAlign: "center",
    p: 3,
    borderRadius: 2,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontWeight: "bold",
    mt: 1,
  },
  continueBtn: {
    mt: 3,
    borderRadius: 5,
    px: 4,
    py: 1,
    display: "block",
    mx: "auto",
  },
  scrollTop: {
    position: "fixed",
    bottom: 20,
    right: 20,
    backgroundColor: "#1976d2",
    color: "#fff",
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};

export default WriteUs;
