"use client";

import { CalendarDays, TargetIcon } from "lucide-react";
import { useState } from "react";
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
import type { FormData } from "./clientIntakeForm";

export type GoalsProps = {
  shortTermGoal: string;
  longTermGoal: string;
  competingSoon: boolean;
  competitionDate: Date | undefined;
  whyPowerlifting: string;
  onFieldChange: (
    field: keyof FormData,
    value: FormData[keyof FormData],
  ) => void;
};

const Goals = ({
  shortTermGoal,
  longTermGoal,
  competingSoon,
  competitionDate,
  whyPowerlifting,
  onFieldChange,
}: GoalsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <TargetIcon size={24} />
        <span className="text-xl">Goals</span>
      </FieldLegend>
      <FieldGroup>
        {/* Short Term Goal Field */}
        <Field>
          <FieldLabel>Short-Term Goal</FieldLabel>
          <FieldDescription>3-6 Months</FieldDescription>
          <Textarea
            placeholder="Enter your goals here."
            value={shortTermGoal}
            onChange={(e) => {
              onFieldChange("shortTermGoal", e.target.value);
            }}
          />
        </Field>
        {/* Long Term Goal Field */}
        <Field>
          <FieldLabel>Long-Term Goal</FieldLabel>
          <FieldDescription>6-24 Months</FieldDescription>
          <Textarea
            placeholder="Enter your goals here."
            value={longTermGoal}
            onChange={(e) => {
              onFieldChange("longTermGoal", e.target.value);
            }}
          />
        </Field>
        <div className="flex gap-6 items-center">
          {/* Competing Soon Field */}
          <Field>
            <FieldLabel>Are you competing soon?</FieldLabel>
            <RadioGroup
              className="flex gap-4 pl-2"
              onValueChange={(e) => onFieldChange("competingSoon", e === "yes")}
              value={competingSoon ? "yes" : "no"}
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
          </Field>
          {/* Competition Date Field */}
          {competingSoon && (
            <Field>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal"
                  >
                    {competitionDate
                      ? competitionDate.toLocaleDateString()
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
                    selected={competitionDate}
                    defaultMonth={competitionDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      onFieldChange("competitionDate", date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </Field>
          )}
        </div>
        {/* Why Powerlifting Field */}
        <Field>
          <FieldLabel>Why are you powerlifting?</FieldLabel>
          <Textarea
            placeholder="Enter why here."
            value={whyPowerlifting}
            onChange={(e) => onFieldChange("whyPowerlifting", e.target.value)}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default Goals;
