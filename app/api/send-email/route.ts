import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, trading_account, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "funded@bluewhalemarkets.com",
      pass: "BwMk-22-25New",
    },
  });

  const mailOptions = {
    from: `"Blue Whale Markets Funded" <funded@bluewhalemarkets.com>`,
    to: "funded@bluewhalemarkets.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Trading Account:</strong> ${trading_account}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
