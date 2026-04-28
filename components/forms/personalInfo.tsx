"use client";

import { CalendarDays, UserIcon } from "lucide-react";
import { useState } from "react";
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
import type { FormData } from "./clientIntakeForm";

export type PersonalInfoProps = {
  name: string;
  dob: Date | undefined;
  height: string;
  weight: string;
  weightUnit: string;
  email: string;
  phone: string;
  onFieldChange: (
    field: keyof FormData,
    value: FormData[keyof FormData],
  ) => void;
};

const PersonalInfo = ({
  name,
  dob,
  height,
  weight,
  weightUnit,
  email,
  phone,
  onFieldChange,
}: PersonalInfoProps) => {
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
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => onFieldChange("name", e.target.value)}
          />
        </Field>
        <div className="gap-6 flex flex-col sm:flex-row">
          {/* DOB Field */}
          <Field>
            <FieldLabel>Date of Birth</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-between font-normal"
                >
                  {dob ? dob.toLocaleDateString() : "Select Date"}
                  <CalendarDays />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-2"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={dob}
                  defaultMonth={dob}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    onFieldChange("dob", date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
          {/* Height Field */}
          <Field>
            <FieldLabel>Height</FieldLabel>
            <Select
              value={height}
              onValueChange={(e) => {
                onFieldChange("height", e);
              }}
            >
              <SelectTrigger>
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
          </Field>
          {/* Weight Field */}
          <Field>
            <FieldLabel>Weight</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => {
                  onFieldChange("weight", e.target.value);
                }}
              />
              <InputGroupAddon align="inline-end">
                <Select
                  value={weightUnit}
                  onValueChange={(e) => {
                    onFieldChange("weightUnit", e);
                  }}
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
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Email Field */}
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                onFieldChange("email", e.target.value);
              }}
            />
          </Field>
          {/* Phone Field */}
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input
              type="tel"
              ref={phoneMask}
              value={phone}
              onChange={(e) => {
                onFieldChange("phone", e.target.value);
              }}
              placeholder="(000) 000-0000"
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
};

export default PersonalInfo;
