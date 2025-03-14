"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [shipments, setShipments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/shipments")
      .then((res) => res.json())
      .then((data) => setShipments(data));
  }, []);

  const logout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <button onClick={logout} style={{ backgroundColor: "red" }}>Logout</button>
      <h3>Shipments</h3>
      <ul>
        {shipments.map((shipment: any) => (
          <li key={shipment._id}>
            {shipment.reference} - {shipment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
