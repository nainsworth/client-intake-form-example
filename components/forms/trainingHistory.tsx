"use client";

import type { IntakeFormData } from "@/lib/schemas/intakeSchema";
import { DumbbellIcon, XIcon } from "lucide-react";
import {
  Control,
  Controller,
  FieldErrors,
  useFieldArray,
  useWatch,
} from "react-hook-form";
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

export type TrainingHistoryProps = {
  control: Control<IntakeFormData>;
  errors: FieldErrors<IntakeFormData>;
  isSubmitted: boolean;
};

const TrainingHistory = ({
  control,
  errors,
  isSubmitted,
}: TrainingHistoryProps) => {
  const hasCompeted = useWatch({ control, name: "hasCompeted" });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "results",
  });

  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <DumbbellIcon size={24} />
        <span className="text-xl">Training History</span>
      </FieldLegend>
      <FieldGroup>
        {/* Years Lifting Field */}
        <Field data-invalid={!!errors.yearsLifting}>
          <div className="flex flex-col xs:flex-row gap-6 justify-between sm:justify-start items-start">
            <FieldLabel>Years lifting seriously?</FieldLabel>
            <Controller
              control={control}
              name="yearsLifting"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    aria-invalid={!!errors.yearsLifting}
                    className="w-full xs:max-w-50"
                  >
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
              )}
            />
          </div>
        </Field>

        {/* Best Lift Fields */}
        <div className="flex flex-col xs:flex-row gap-6">
          <Field data-invalid={!!errors.bestSquat}>
            <FieldLabel>Best Squat</FieldLabel>
            <InputGroup>
              <Controller
                control={control}
                name="bestSquat"
                render={({ field }) => (
                  <InputGroupInput
                    type="number"
                    step="0.1"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!errors.bestSquat}
                  />
                )}
              />
              <InputGroupAddon align="inline-end">
                <Controller
                  control={control}
                  name="liftUnit"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
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
                  )}
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field data-invalid={!!errors.bestBench}>
            <FieldLabel>Best Bench</FieldLabel>
            <InputGroup>
              <Controller
                control={control}
                name="bestBench"
                render={({ field }) => (
                  <InputGroupInput
                    type="number"
                    step="0.1"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!errors.bestBench}
                  />
                )}
              />
              <InputGroupAddon align="inline-end">
                <Controller
                  control={control}
                  name="liftUnit"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
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
                  )}
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field data-invalid={!!errors.bestDeadlift}>
            <FieldLabel>Best Deadlift</FieldLabel>
            <InputGroup>
              <Controller
                control={control}
                name="bestDeadlift"
                render={({ field }) => (
                  <InputGroupInput
                    type="number"
                    step="0.1"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!errors.bestDeadlift}
                  />
                )}
              />
              <InputGroupAddon align="inline-end">
                <Controller
                  control={control}
                  name="liftUnit"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
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
                  )}
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>
        <Field>
          <div className="flex items-center">
            <Field>
              <FieldLabel>Previous competitions?</FieldLabel>
              <Controller
                control={control}
                name="hasCompeted"
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={(val) => field.onChange(val === "yes")}
                    value={field.value ? "yes" : "no"}
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
                )}
              />
            </Field>
            {/* Add Results Fields */}
            {hasCompeted && (
              <Button
                aria-invalid={!!isSubmitted && fields.length === 0}
                type="button"
                onClick={() => append({ result: "" })}
              >
                Add Comp
              </Button>
            )}
          </div>
          {hasCompeted && fields.length === 0 && isSubmitted && (
            <p className="text-destructive text-sm text-end">
              Please add a competition result
            </p>
          )}
        </Field>
        {/* Competition Result Fields */}
        {fields.map((result, index) => (
          <Field
            key={result.id}
            data-invalid={!!errors.results?.[index]?.result}
          >
            <InputGroup>
              {/* Result Field */}
              <Controller
                control={control}
                name={`results.${index}.result`}
                render={({ field }) => (
                  <InputGroupInput
                    aria-invalid={!!errors.results?.[index]?.result}
                    placeholder="Competition Name | Results"
                    {...field}
                  />
                )}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="ghost"
                  className="ml-auto"
                  type="button"
                  onClick={() => remove(index)}
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
          <Controller
            control={control}
            name="athleticBackground"
            render={({ field }) => (
              <Textarea
                placeholder="Optional."
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Field>
        {/* Training Schedule */}
        <Field data-invalid={!!errors.trainingSchedule}>
          <FieldLabel>Current training schedule</FieldLabel>
          <FieldDescription>
            Days per week and general structure
          </FieldDescription>
          <Controller
            control={control}
            name="trainingSchedule"
            render={({ field }) => (
              <Textarea
                placeholder="Enter current training schedule."
                value={field.value}
                onChange={field.onChange}
                aria-invalid={!!errors.trainingSchedule}
              />
            )}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default TrainingHistory;
