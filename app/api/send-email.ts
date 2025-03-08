import config from "@/lib/config";
import emailjs from "@emailjs/browser";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email } = req.body;

    // Validation: Ensure name and email are provided
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Missing required fields: name and email" });
    }

    const response = await emailjs.send(
      config.env.emailjs.serviceId, // Your EmailJS Service ID
      config.env.emailjs.templateId, // Your EmailJS Template ID
      { name, email }
    );

    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
}
