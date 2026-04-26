"use client";

import { CalendarDays, UserIcon } from "lucide-react";
import { useState } from "react";
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
import { useMaskInput } from "use-mask-input";

const PersonalInfo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const phoneMask = useMaskInput({
    mask: `(999) 999-9999`
  });

  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <UserIcon size={24} />
        <span className="text-xl">Personal Info</span>
      </FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input type="text" />
        </Field>
        <div className="gap-6 flex flex-col sm:flex-row">
          <Field>
            <FieldLabel>Date of Birth</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select Date"}
                  <CalendarDays />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-2"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  defaultMonth={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
          <Field>
            <FieldLabel>Height</FieldLabel>
            <Select>
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
          <Field>
            <FieldLabel>Weight</FieldLabel>
            <InputGroup>
              <InputGroupInput type="number" step="0.1" />
              <InputGroupAddon align="inline-end">
                <Select defaultValue="lbs">
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
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" placeholder="example@email.com" />
          </Field>
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input type="tel" ref={phoneMask} placeholder="(000) 000-0000" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
};

export default PersonalInfo;
