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

const Goals = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <TargetIcon size={24} />
        <span className="text-xl">Goals</span>
      </FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>Short-Term Goal</FieldLabel>
          <FieldDescription>3-6 Months</FieldDescription>
          <Textarea placeholder="Enter your goals here." />
        </Field>
        <Field>
          <FieldLabel>Long-Term Goal</FieldLabel>
          <FieldDescription>6-24 Months</FieldDescription>
          <Textarea placeholder="Enter your goals here." />
        </Field>
        <div className="flex gap-6 items-center">
          <Field>
            <FieldLabel>Are you competing soon?</FieldLabel>
            <RadioGroup defaultValue="no" className="flex gap-4 pl-2">
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
          <Field>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : "When?"}
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
        </div>

        <Field>
          <FieldLabel>Why are you powerlifting?</FieldLabel>
          <Textarea placeholder="Enter why here." />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default Goals;
