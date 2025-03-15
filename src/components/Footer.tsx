import { Box, Container, Typography, Grid, TextField, Button, Link, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f8f9fc", py: 5, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" color="primary">
              Shipping Saint Logistics Services
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              34th St, Park Triangle Corporate Center, Taguig, Metro Manila.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Phone:</strong> 639457417005
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong>{" "}
              <Link href="mailto:info@example.com" underline="hover" color="primary">
                Send Us An Email
              </Link>
            </Typography>
          </Grid>

          {/* Center Sections */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Company
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">Home</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">History</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">Services</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">Career</Link>
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">
              Useful Links
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">FAQs</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">Contact Us</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">Track It</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" underline="hover" color="inherit">Member Area</Link>
            </Typography>
          </Grid>

          {/* Right Section - Real Time Tracking */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Real Time Tracking
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Enter (12 - 16 Digits) Tracking Information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Enter tracking number"
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
              <Button variant="contained" sx={{ borderRadius: 10, px: 3 }}>
                Track Now
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", mt: 5, pt: 3, borderTop: "1px solid #ddd" }}>
          <Typography variant="body2">
            © Copyright <strong>2025 Shipping Saint Logistics Services</strong>. All Rights Reserved.
          </Typography>
        </Box>

        {/* Floating Icons */}
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <IconButton color="primary" sx={{ bgcolor: "white", boxShadow: 2 }}>
            <PhoneIcon />
          </IconButton>
          <IconButton color="primary" sx={{ bgcolor: "white", boxShadow: 2 }}>
            <EmailIcon />
          </IconButton>
          <IconButton color="primary" sx={{ bgcolor: "white", boxShadow: 2 }}>
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
