"use server";

import type { FormData } from "@/components/forms/clientIntakeForm";
import confirmationEmail from "@/emails/confirmationEmail";
import IntakeEmail from "@/emails/intakeEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendIntakeEmail = async (formData: FormData) => {
  await Promise.all([
    resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: ["nja8161995@gmail.com"],
      subject: "New Client Intake Form",
      react: IntakeEmail(formData),
    }),
    resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: [formData.email],
      subject: "We got your form!",
      react: confirmationEmail({ name: formData.name }),
    }),
  ]);
};

export default sendIntakeEmail;
