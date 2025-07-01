import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// (Opcional) Usa variables de entorno en lugar de password directo
const EMAIL_USER = "funded@bluewhalemarkets.com";
const EMAIL_PASS = "BwMk-22-25New"; // o process.env.EMAIL_PASS

export async function POST(req: NextRequest) {
  const { name, email, trading_account, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const escapeHTML = (str: string) =>
    str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const mailOptions = {
    from: `"Blue Whale Markets Funded" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    replyTo: email,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Message</h2>
      <p><strong>Name:</strong> ${escapeHTML(name)}</p>
      <p><strong>Email:</strong> ${escapeHTML(email)}</p>
      <p><strong>Trading Account:</strong> ${escapeHTML(trading_account)}</p>
      <p><strong>Message:</strong><br/>${escapeHTML(message)}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error.message || error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
