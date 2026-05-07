"use client";

import { DumbbellIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import type { FormData } from "./clientIntakeForm";

export type TrainingHistoryProps = {
  yearsLifting: string;
  bestSquat: string;
  bestBench: string;
  bestDeadlift: string;
  liftUnit: string;
  hasCompeted: boolean;
  results: { result: string }[];
  athleticBackground: string;
  trainingSchedule: string;
  onFieldChange: (
    field: keyof FormData,
    value: FormData[keyof FormData],
  ) => void;
};

const TrainingHistory = ({
  yearsLifting,
  bestSquat,
  bestBench,
  bestDeadlift,
  liftUnit,
  hasCompeted,
  results,
  athleticBackground,
  trainingSchedule,
  onFieldChange,
}: TrainingHistoryProps) => {
  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <DumbbellIcon size={24} />
        <span className="text-xl">Training History</span>
      </FieldLegend>
      <FieldGroup>
        {/* Years Lifting Field */}
        <Field orientation="horizontal" className="max-w-80">
          <FieldLabel>Years lifting seriously?</FieldLabel>
          <Select
            value={yearsLifting}
            onValueChange={(e) => onFieldChange("yearsLifting", e)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select years" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectGroup>
                <SelectItem value="0-12 months">0-12 months</SelectItem>
                <SelectItem value="1-3 years">1-2 years</SelectItem>
                <SelectItem value="3-5 years">2-5 years</SelectItem>
                <SelectItem value="5+ years">5+ years</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        {/* Best Lift Fields */}
        <div className="flex gap-6">
          <Field>
            <FieldLabel>Best Squat</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type="number"
                step="0.1"
                value={bestSquat}
                onChange={(e) => {
                  onFieldChange("bestSquat", e.target.value);
                }}
              />
              <InputGroupAddon align="inline-end">
                <Select
                  value={liftUnit}
                  onValueChange={(e) => onFieldChange("liftUnit", e)}
                >
                  <SelectTrigger className="hover:bg-accent w-full border-none dark:bg-transparent">
                    <SelectValue placeholder="lbs/kg" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectItem value="lbs">lbs</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel>Best Bench</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type="number"
                step="0.1"
                value={bestBench}
                onChange={(e) => {
                  onFieldChange("bestBench", e.target.value);
                }}
              />
              <InputGroupAddon align="inline-end">
                <Select
                  value={liftUnit}
                  onValueChange={(e) => onFieldChange("liftUnit", e)}
                >
                  <SelectTrigger className="hover:bg-accent w-full border-none dark:bg-transparent">
                    <SelectValue placeholder="lbs/kg" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectItem value="lbs">lbs</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel>Best Deadlift</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type="number"
                step="0.1"
                value={bestDeadlift}
                onChange={(e) => {
                  onFieldChange("bestDeadlift", e.target.value);
                }}
              />
              <InputGroupAddon align="inline-end">
                <Select
                  value={liftUnit}
                  onValueChange={(e) => onFieldChange("liftUnit", e)}
                >
                  <SelectTrigger className="hover:bg-accent w-full border-none dark:bg-transparent">
                    <SelectValue placeholder="lbs/kg" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectItem value="lbs">lbs</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>

        <Field orientation={"horizontal"}>
          <Field>
            <FieldLabel>Previous competitions?</FieldLabel>
            <RadioGroup
              onValueChange={(e) => onFieldChange("hasCompeted", e === "yes")}
              value={hasCompeted ? "yes" : "no"}
              className="flex gap-4 pl-2"
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
          {/* Add Results Fields */}
          {hasCompeted && (
            <Button
              type="button"
              onClick={() =>
                onFieldChange("results", [...results, { result: "" }])
              }
            >
              Add Results
            </Button>
          )}
        </Field>
        {/* Competition Result Fields */}
        {results.map((result, index) => (
          <Field key={index}>
            <InputGroup>
              {/* Result Field */}
              <InputGroupInput
                placeholder="Competition Name | Results"
                value={result.result}
                onChange={(e) => {
                  const updated = results.map((r, i) =>
                    i === index ? { result: e.target.value } : r,
                  );
                  onFieldChange("results", updated);
                }}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="ghost"
                  className="ml-auto"
                  type="button"
                  onClick={() =>
                    onFieldChange(
                      "results",
                      results.filter((_, i) => i !== index),
                    )
                  }
                >
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        ))}
        {/* Athletic Background Field */}
        <Field>
          <FieldLabel>Other Athletic Background?</FieldLabel>
          <Textarea
            placeholder="Enter other athletic background."
            value={athleticBackground}
            onChange={(e) =>
              onFieldChange("athleticBackground", e.target.value)
            }
          />
        </Field>
        {/* Training Schedule */}
        <Field>
          <FieldLabel>Current training schedule</FieldLabel>
          <FieldDescription>
            Days per week and general structure
          </FieldDescription>
          <Textarea
            placeholder="Enter current training schedule."
            value={trainingSchedule}
            onChange={(e) => onFieldChange("trainingSchedule", e.target.value)}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default TrainingHistory;
