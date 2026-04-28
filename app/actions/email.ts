"use server";

import type { FormData } from "@/components/forms/clientIntakeForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendIntakeEmail = async (formData: FormData) => {
  await resend.emails.send({
    from: "Test <onboarding@resend.dev>",
    to: ["nja8161995@gmail.com"],
    subject: "New Client Intake Form",
    html: `<p>${formData.name}</p>`,
  });
};

export default sendIntakeEmail;
