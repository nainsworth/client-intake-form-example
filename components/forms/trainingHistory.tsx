"use client";

import { DumbbellIcon, XIcon } from "lucide-react";
import { useState } from "react";
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

const TrainingHistory = () => {
  const [results, setResults] = useState<{ result: string }[]>([]);

  const [radio, setRadio] = useState<boolean>(false);

  const handleRadioChange = () => {
    setRadio(!radio);
  };

  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center mb-4">
        <DumbbellIcon size={24} />
        <span className="text-xl">Training History</span>
      </FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal" className="max-w-80">
          <FieldLabel>Years lifting seriously?</FieldLabel>
          <Select>
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

        <div className="flex gap-6">
          <Field>
            <FieldLabel>Best Squat</FieldLabel>
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
          <Field>
            <FieldLabel>Best Bench</FieldLabel>
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
          <Field>
            <FieldLabel>Best Deadlift</FieldLabel>
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

        <Field orientation={"horizontal"}>
          <Field>
            <FieldLabel>Previous competitions?</FieldLabel>
            <RadioGroup
              defaultValue="no"
              onValueChange={handleRadioChange}
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
          {radio && (
            <Button
              type="button"
              onClick={() => setResults((prev) => [...prev, { result: "" }])}
            >
              Add Results
            </Button>
          )}
        </Field>
        {/* Competition Result Fields */}
        {results.map((result, index) => (
          <Field key={index}>
            <InputGroup>
              <InputGroupInput placeholder="Competition Name | Results" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="ghost"
                  className="ml-auto"
                  type="button"
                  onClick={() =>
                    setResults((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        ))}

        <Field>
          <FieldLabel>Other Athletic Background?</FieldLabel>
          <Textarea placeholder="Enter your goals here." />
        </Field>

        <Field>
          <FieldLabel>Current training schedule</FieldLabel>
          <FieldDescription>
            Days per week and general structure
          </FieldDescription>
          <Textarea placeholder="Enter why here." />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default TrainingHistory;
