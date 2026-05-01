"use client";

import sendIntakeEmail from "@/app/actions/email";
import { useState, useTransition } from "react";
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

export type FormData = {
  // Personal Info
  name: string;
  dob: Date | undefined;
  height: string;
  weight: string;
  weightUnit: string;
  email: string;
  phone: string;

  // Goals
  shortTermGoal: string;
  longTermGoal: string;
  competingSoon: boolean;
  competitionDate: Date | undefined;
  whyPowerlifting: string;

  // Training History
  yearsLifting: string;
  bestSquat: string;
  bestBench: string;
  bestDeadlift: string;
  liftUnit: string;
  hasCompeted: boolean;
  results: { result: string }[];
  athleticBackground: string;
  trainingSchedule: string;
};

const ClientIntakeForm = () => {
  const [isLoading, startLoading] = useTransition();
  const [formData, setFormData] = useState<FormData>({
    // Personal Info
    name: "",
    dob: undefined,
    height: "",
    weight: "",
    weightUnit: "lbs",
    email: "",
    phone: "",

    // Goals
    shortTermGoal: "",
    longTermGoal: "",
    competingSoon: false,
    competitionDate: undefined,
    whyPowerlifting: "",

    // Training History
    yearsLifting: "",
    bestSquat: "",
    bestBench: "",
    bestDeadlift: "",
    liftUnit: "lbs",
    hasCompeted: false,
    results: [],
    athleticBackground: "",
    trainingSchedule: "",
  });

  const handleChange = (
    field: keyof FormData,
    value: FormData[keyof FormData],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
          onSubmit={() => {
            startLoading(() => sendIntakeEmail(formData));
          }}
          id="client-intake-form"
        >
          <FieldGroup>
            <PersonalInfo
              name={formData.name}
              dob={formData.dob}
              height={formData.height}
              weight={formData.weight}
              weightUnit={formData.weightUnit}
              email={formData.email}
              phone={formData.phone}
              onFieldChange={handleChange}
            />
            <FieldSeparator />
            <Goals
              shortTermGoal={formData.shortTermGoal}
              longTermGoal={formData.longTermGoal}
              competingSoon={formData.competingSoon}
              competitionDate={formData.competitionDate}
              whyPowerlifting={formData.whyPowerlifting}
              onFieldChange={handleChange}
            />
            <FieldSeparator />
            <TrainingHistory
              yearsLifting={formData.yearsLifting}
              bestSquat={formData.bestSquat}
              bestBench={formData.bestBench}
              bestDeadlift={formData.bestDeadlift}
              liftUnit={formData.liftUnit}
              hasCompeted={formData.hasCompeted}
              results={formData.results}
              athleticBackground={formData.athleticBackground}
              trainingSchedule={formData.trainingSchedule}
              onFieldChange={handleChange}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="pt-6">
        <Field orientation="horizontal">
          <Button variant="secondary" type="button">
            Reset
          </Button>
          <Button type="submit" form="client-intake-form" disabled={isLoading}>
            {isLoading && <Spinner data-icon="inline-start" />}
            {isLoading ? "Sending..." : "Send Form"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default ClientIntakeForm;
