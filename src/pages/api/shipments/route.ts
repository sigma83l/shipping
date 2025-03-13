import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Shipment from "@/models/Shipment";

export async function GET() {
  await connectDB();
  const shipments = await Shipment.find();
  return NextResponse.json(shipments);
}
