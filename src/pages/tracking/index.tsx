"use client"; // If using Next.js App Router

import { useState } from "react";
import { 
  Box, TextField, MenuItem, Select, FormControl, InputLabel, Button 
} from "@mui/material";

export default function TrackingPage() {
  const [formData, setFormData] = useState({
    shipmentType: "International Sh",
    courier: "SSLS",
    mode: "Sea Transport",
    weight: "",
    packages: "",
    product: "",
    quantity: "2",
    paymentMode: "CASH",
    totalFreight: "1,700.00 USD",
    carrier: "",
    carrierRef: "",
    origin: "",
    destination: "",
    departureTime: "",
    pickupDate: "",
    pickupTime: "",
    expectedDeliveryDate: "",
    comments: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Type of Shipment</InputLabel>
        <Select name="shipmentType" value={formData.shipmentType} onChange={handleChange}>
          <MenuItem value="International Sh">International Sh</MenuItem>
        </Select>
      </FormControl>

      <TextField fullWidth label="Weight" name="weight" value={formData.weight} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Packages" name="packages" value={formData.packages} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Product" name="product" value={formData.product} onChange={handleChange} sx={{ mb: 2 }} />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Payment Mode</InputLabel>
        <Select name="paymentMode" value={formData.paymentMode} onChange={handleChange}>
          <MenuItem value="CASH">CASH</MenuItem>
        </Select>
      </FormControl>

      <TextField fullWidth label="Total Freight" name="totalFreight" value={formData.totalFreight} disabled sx={{ mb: 2 }} />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Carrier</InputLabel>
        <Select name="carrier" value={formData.carrier} onChange={handleChange}>
          <MenuItem value="">-- Select One --</MenuItem>
          <MenuItem value="DHL">DHL</MenuItem>
          <MenuItem value="USPS">USPS</MenuItem>
          <MenuItem value="FedEx">FedEx</MenuItem>
        </Select>
      </FormControl>

      <TextField fullWidth label="Carrier Reference No." name="carrierRef" value={formData.carrierRef} onChange={handleChange} sx={{ mb: 2 }} />
      
      <TextField fullWidth label="Departure Time" name="departureTime" type="datetime-local" value={formData.departureTime} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Pickup Time" name="pickupTime" type="time" value={formData.pickupTime} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Expected Delivery Date" name="expectedDeliveryDate" type="date" value={formData.expectedDeliveryDate} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Comments" name="comments" multiline rows={3} value={formData.comments} onChange={handleChange} sx={{ mb: 2 }} />

      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
}
