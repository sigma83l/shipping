import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Shipment from "@/models/Shipment";
import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const shipment = await Shipment.findById(params.id);
  if (!shipment) {
    return NextResponse.json({ message: "Shipment not found" }, { status: 404 });
  }

  const doc = new PDFDocument();
  const filePath = path.join(process.cwd(), "public", `invoice_${shipment._id}.pdf`);
  const stream = createWriteStream(filePath);
  doc.pipe(stream);

  doc.fontSize(20).text("Shipping Invoice", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text(`Reference: ${shipment.reference}`);
  doc.text(`Status: ${shipment.status}`);
  doc.text(`Delivery Date: ${shipment.delivery_date}`);
  doc.text(`Sender: ${shipment.sender}`);
  doc.text(`Recipient: ${shipment.recipient_name} (${shipment.recipient_number})`);
  doc.text(`Address: ${shipment.recipient_address}`);
  doc.text(`Package: ${shipment.package_type}`);
  doc.text(`Quantity: ${shipment.quantity}, Weight: ${shipment.weight}`);
  doc.text(`Payment Method: ${shipment.payment_method}`);
  doc.text(`Date Created: ${shipment.date_time_now}`);

  doc.moveDown();
  doc.fontSize(14).text("Progress Stages:");
  shipment.progress_stage.forEach((stage: any) => {
    doc.fontSize(12).text(`${stage.name}: ${stage.completed ? "✔️ Completed" : "❌ Pending"}`);
  });

  doc.end();

  return NextResponse.json({ url: `/invoice_${shipment._id}.pdf` });
}
