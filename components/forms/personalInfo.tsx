"use client";

import type { IntakeFormData } from "@/lib/schemas/intakeSchema";
import { CalendarDays, UserIcon } from "lucide-react";
import { useState } from "react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { useMaskInput } from "use-mask-input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export type PersonalInfoProps = {
  control: Control<IntakeFormData>;
  errors: FieldErrors<IntakeFormData>;
};

const PersonalInfo = ({ control, errors }: PersonalInfoProps) => {
  const [open, setOpen] = useState(false);

  const phoneMask = useMaskInput({
    mask: `(999) 999-9999`,
  });

  return (
    <FieldSet>
      {/* Title */}
      <FieldLegend className="flex gap-2 items-center mb-4">
        <UserIcon size={24} />
        <span className="text-xl">Personal Info</span>
      </FieldLegend>
      <FieldGroup>
        {/* Name Field */}
        <Field data-invalid={!!errors.name}>
          <FieldLabel>Name</FieldLabel>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input {...field} type="text" aria-invalid={!!errors.name} />
            )}
          />
        </Field>
        <div className="gap-6 flex flex-col sm:flex-row">
          {/* DOB Field */}
          <Field data-invalid={!!errors.dob}>
            <FieldLabel>Date of Birth</FieldLabel>
            <Controller
              control={control}
              name="dob"
              render={({ field }) => (
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="justify-between font-normal"
                      aria-invalid={!!errors.dob}
                    >
                      {field.value
                        ? field.value.toLocaleDateString()
                        : "Select Date"}
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
          {/* Height Field */}
          <Field data-invalid={!!errors.height}>
            <FieldLabel>Height</FieldLabel>
            <Controller
              control={control}
              name="height"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={!!errors.height}>
                    <SelectValue placeholder="Select Height" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectItem value="59">4&apos; 11&quot;</SelectItem>
                      <SelectItem value="65">5&apos; 5&quot;</SelectItem>
                      <SelectItem value="68">5&apos; 8&quot;</SelectItem>
                      <SelectItem value="72">6&apos; 0&quot;</SelectItem>
                      <SelectItem value="74">6&apos; 2&quot;</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </Field>
          {/* Weight Field */}
          <Field data-invalid={!!errors.weight}>
            <FieldLabel>Weight</FieldLabel>
            <InputGroup>
              <Controller
                control={control}
                name="weight"
                render={({ field }) => (
                  <InputGroupInput
                    type="number"
                    step="0.1"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!errors.weight}
                  />
                )}
              />
              <InputGroupAddon align="inline-end">
                <Controller
                  control={control}
                  name="weightUnit"
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
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Email Field */}
          <Field data-invalid={!!errors.email}>
            <FieldLabel>Email</FieldLabel>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!errors.email}
                />
              )}
            />
          </Field>
          {/* Phone Field */}
          <Field data-invalid={!!errors.phone}>
            <FieldLabel>Phone</FieldLabel>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  type="tel"
                  ref={phoneMask}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="(000) 000-0000"
                  aria-invalid={!!errors.phone}
                />
              )}
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
};

export default PersonalInfo;
