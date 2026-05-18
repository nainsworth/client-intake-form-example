"use client";

import type { IntakeFormData } from "@/lib/schemas/intakeSchema";
import { CalendarDays, TargetIcon } from "lucide-react";
import { useState } from "react";
import {
  Controller,
  useWatch,
  type Control,
  type FieldErrors,
} from "react-hook-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

export type GoalsProps = {
  control: Control<IntakeFormData>;
  errors: FieldErrors<IntakeFormData>;
};

const Goals = ({ control, errors }: GoalsProps) => {
  const [open, setOpen] = useState(false);
  const competingSoon = useWatch({ control, name: "competingSoon" });

  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <TargetIcon size={24} />
        <span className="text-xl">Goals</span>
      </FieldLegend>
      <FieldGroup>
        {/* Short Term Goal Field */}
        <Field data-invalid={!!errors.shortTermGoal}>
          <FieldLabel>Short-Term Goal</FieldLabel>
          <FieldDescription>3-6 Months</FieldDescription>
          <Controller
            control={control}
            name="shortTermGoal"
            render={({ field }) => (
              <Textarea
                placeholder="Enter your goals here."
                value={field.value}
                onChange={field.onChange}
                aria-invalid={!!errors.shortTermGoal}
              />
            )}
          />
        </Field>
        {/* Long Term Goal Field */}
        <Field data-invalid={!!errors.longTermGoal}>
          <FieldLabel>Long-Term Goal</FieldLabel>
          <FieldDescription>6-24 Months</FieldDescription>
          <Controller
            control={control}
            name="longTermGoal"
            render={({ field }) => (
              <Textarea
                placeholder="Enter your goals here."
                value={field.value}
                onChange={field.onChange}
                aria-invalid={!!errors.longTermGoal}
              />
            )}
          />
        </Field>
        <div className="flex flex-col xs:flex-row gap-6 items-start">
          {/* Competing Soon Field */}
          <Field>
            <FieldLabel>Are you competing soon?</FieldLabel>
            <Controller
              control={control}
              name="competingSoon"
              render={({ field }) => (
                <RadioGroup
                  className="flex gap-4 pl-2"
                  onValueChange={(val) => {
                    field.onChange(val === "yes");
                  }}
                  value={field.value ? "yes" : "no"}
                >
                  <div className="flex item-center gap-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              )}
            />
          </Field>
          {/* Competition Date Field */}
          {competingSoon && (
            <Field data-invalid={!!errors.competitionDate}>
              <Controller
                control={control}
                name="competitionDate"
                render={({ field }) => (
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="justify-between font-normal"
                        aria-invalid={!!errors.competitionDate}
                      >
                        {field.value
                          ? field.value.toLocaleDateString()
                          : "When?"}
                        <CalendarDays />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-2"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        defaultMonth={field.value}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </Field>
          )}
        </div>
        {/* Why Powerlifting Field */}
        <Field data-invalid={!!errors.whyPowerlifting}>
          <FieldLabel>Why are you powerlifting?</FieldLabel>
          <Controller
            control={control}
            name="whyPowerlifting"
            render={({ field }) => (
              <Textarea
                placeholder="Enter why here."
                value={field.value}
                onChange={field.onChange}
                aria-invalid={!!errors.whyPowerlifting}
              />
            )}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default Goals;
