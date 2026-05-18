import z from "zod";

export const intakeSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    dob: z.date("Date is required"),
    height: z.string().min(1, "Height is required"),
    weight: z.string().min(1, "Weight is required"),
    weightUnit: z.string(),
    email: z.email("Email is required"),
    phone: z
      .string()
      .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Phone number is required"),
    shortTermGoal: z.string().min(1, "This field is required"),
    longTermGoal: z.string().min(1, "This field is required"),
    competingSoon: z.boolean(),
    competitionDate: z.date("Date is required").optional(),
    whyPowerlifting: z.string().min(1, "This field is required"),
    yearsLifting: z.string().min(1, "Please select an option"),
    bestSquat: z.string().min(1, "Best Lift is required"),
    bestBench: z.string().min(1, "Best Lift is required"),
    bestDeadlift: z.string().min(1, "Best Lift is required"),
    liftUnit: z.string(),
    hasCompeted: z.boolean(),
    results: z.array(
      z.object({ result: z.string().min(1, "Result is required") }),
    ),
    athleticBackground: z.string().optional(),
    trainingSchedule: z.string().min(1, "This field is required"),
  })
  .superRefine((data, ctx) => {
    if (data.competingSoon && !data.competitionDate) {
      ctx.addIssue({
        code: "custom",
        message: "Competition date is required",
        path: ["competitionDate"],
      });
    }
    if (data.hasCompeted && data.results.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Competition result is required",
        path: ["results"],
      });
    }
  });

export type IntakeFormData = z.infer<typeof intakeSchema>;
