"use server";

import confirmationEmail from "@/emails/confirmationEmail";
import IntakeEmail from "@/emails/intakeEmail";
import type { IntakeFormData } from "@/lib/schemas/intakeSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendIntakeEmail = async (formData: IntakeFormData) => {
  try {
    await Promise.all([
      resend.emails.send({
        from: "Coach <coach@colossalstrength.com>",
        to: [formData.email],
        bcc: ["nja8161995@gmail.com"],
        subject: "New Client Intake Form",
        react: IntakeEmail(formData),
      }),
      resend.emails.send({
        from: "Coach <coach@colossalstrength.com>",
        to: [formData.email],
        bcc: ["nja8161995@gmail.com"],
        subject: "We got your form!",
        react: confirmationEmail({ name: formData.name }),
      }),
    ]);
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send" };
  }
};

export default sendIntakeEmail;
