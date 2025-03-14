"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProgressStage {
  name: string;
  completed: boolean;
}

export default function EditShipment({ params }: { params: { id: string } }) {
  const [shipment, setShipment] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [progressStage, setProgressStage] = useState<ProgressStage[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/admin/shipments/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setShipment(data);
        setStatus(data.status);
        setProgressStage(data.progress_stage || []);
      });
  }, []);

  const handleUpdate = async () => {
    await fetch(`/api/admin/shipments/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, progress_stage: progressStage }),
    });

    router.push("/admin/dashboard");
  };

  if (!shipment) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Shipment: {shipment.reference}</h2>
      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Transit">In Transit</option>
        <option value="Delivered">Delivered</option>
      </select>

      <h3>Progress Stages</h3>
      {progressStage.map((stage, index) => (
        <div key={index}>
          <label>{stage.name}</label>
          <input
            type="checkbox"
            checked={stage.completed}
            onChange={(e) => {
              const updatedStages = [...progressStage];
              updatedStages[index] = { ...updatedStages[index], completed: e.target.checked };
              setProgressStage(updatedStages);
            }}
          />
        </div>
      ))}

      <button onClick={handleUpdate}>Update Shipment</button>
    </div>
  );
}
