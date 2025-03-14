"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import "./styles.css"; // Import global styles

export default function Home() {
  const [reference, setReference] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tracking/${reference}`);
  };

  return (
    <div className="container">
      <h2>Enter Shipping Number</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="Enter Tracking Number"
        />
        <button type="submit">Track Shipment</button>
      </form>
    </div>
  );
}
