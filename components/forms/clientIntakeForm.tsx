"use client";

import sendIntakeEmail from "@/app/actions/email";
import { intakeSchema, type IntakeFormData } from "@/lib/schemas/intakeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldGroup, FieldSeparator } from "../ui/field";
import { Spinner } from "../ui/spinner";
import Goals from "./goals";
import PersonalInfo from "./personalInfo";
import TrainingHistory from "./trainingHistory";

const ClientIntakeForm = () => {
  const [isLoading, startLoading] = useTransition();

  const {
    control,
    handleSubmit,
    reset,

    formState: { errors, isSubmitted },
  } = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      name: "",
      dob: undefined,
      height: "",
      heightUnit: "in",
      weight: "",
      weightUnit: "lbs",
      email: "",
      phone: "",
      shortTermGoal: "",
      longTermGoal: "",
      competingSoon: false,
      competitionDate: undefined,
      whyPowerlifting: "",
      yearsLifting: "",
      bestSquat: "",
      bestBench: "",
      bestDeadlift: "",
      liftUnit: "lbs",
      hasCompeted: false,
      results: [],
      athleticBackground: "",
      trainingSchedule: "",
    },
  });

  return (
    <Card className="w-full sm:max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl">
          Powerlifting Client Intake Form
        </CardTitle>
        <CardDescription>Test Form</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="intake-form"
          onSubmit={handleSubmit(async (data) => {
            startLoading(async () => {
              const result = await sendIntakeEmail(data);
              if (result.success) {
                toast.success("Form Sent!");
                reset();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                toast.error("Something went wrong. Please Try Again");
              }
            });
          })}
        >
          <FieldGroup>
            <PersonalInfo control={control} errors={errors} />
            <FieldSeparator />
            <Goals control={control} errors={errors} />
            <FieldSeparator />
            <TrainingHistory
              control={control}
              errors={errors}
              isSubmitted={isSubmitted}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="pt-6">
        <Field orientation="horizontal">
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              reset();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Reset
          </Button>
          <Button type="submit" form="intake-form" disabled={isLoading}>
            {isLoading && <Spinner data-icon="inline-start" />}
            {isLoading ? "Sending..." : "Send Form"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default ClientIntakeForm;
