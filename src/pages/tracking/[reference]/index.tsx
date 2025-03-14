"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import "./styles.css"; // Import global styles

export default function TrackingPage() {
  const { reference } = useParams();
  const [shipment, setShipment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/shipment/${reference}`)
      .then((res) => res.json())
      .then((data) => {
        setShipment(data);
        setLoading(false);
      });
  }, [reference]);

  if (loading) return <p>Loading...</p>;
  if (!shipment) return <p>Shipment not found</p>;

  return (
    <div className="container">
      <h2>Tracking: {shipment.reference}</h2>
      <p><strong>Status:</strong> {shipment.status}</p>
      <p><strong>Recipient:</strong> {shipment.recipient_name}</p>
      <p><strong>Address:</strong> {shipment.recipient_address}</p>
      <p><strong>Delivery Date:</strong> {shipment.delivery_date}</p>
    </div>
  );
}
