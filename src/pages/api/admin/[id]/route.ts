import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Shipment from "@/models/Shipment";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const { status, progress_stage } = await req.json();

  const shipment = await Shipment.findById(params.id);
  if (!shipment) {
    return NextResponse.json({ message: "Shipment not found" }, { status: 404 });
  }

  shipment.status = status;
  shipment.progress_stage = progress_stage;
  await shipment.save();

  return NextResponse.json({ message: "Shipment updated successfully" });
}
