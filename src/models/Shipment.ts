import mongoose, { Schema, Document } from "mongoose";

interface IProgressStage {
  stage: string;
  completed: boolean;
}

interface IShipment extends Document {
  status: string;
  delivery_date: string;
  reference: string;
  sender: string;
  recipient_name: string;
  recipient_number: string;
  recipient_address: string;
  package_type: string;
  quantity: number;
  weight: number;
  payment_method: string;
  date_time_now: string;
  progress_stage: IProgressStage[];
}

const ShipmentSchema = new Schema<IShipment>({
  status: { type: String, required: true },
  delivery_date: { type: String, required: true },
  reference: { type: String, required: true, unique: true },
  sender: { type: String, required: true },
  recipient_name: { type: String, required: true },
  recipient_number: { type: String, required: true },
  recipient_address: { type: String, required: true },
  package_type: { type: String, required: true },
  quantity: { type: Number, required: true },
  weight: { type: Number, required: true },
  payment_method: { type: String, required: true },
  date_time_now: { type: String, required: true },
  progress_stage: [{ stage: String, completed: Boolean }],
});

export default mongoose.models.Shipment || mongoose.model<IShipment>("Shipment", ShipmentSchema);
