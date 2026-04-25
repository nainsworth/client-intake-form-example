"use client";

import { CalendarDays, User } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

// import * as z from "zod";
// import { toast } from "sonner";
// import { useForm } from "@tanstack/react-form";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import {
//   Field,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from "../ui/field";
// import { Input } from "../ui/input";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroupTextarea,
// } from "../ui/input-group";
// import { Button } from "../ui/button";

// const formSchema = z.object({
//   title: z
//     .string()
//     .min(5, "Bug title must be at least 5 characters.")
//     .max(32, "Bug title must be at most 32 characters."),
//   description: z
//     .string()
//     .min(20, "Description must be at least 20 characters.")
//     .max(100, "Description must be at most 100 characters."),
// });

// const ClientIntakeForm = () => {
//   const form = useForm({
//     defaultValues: {
//       title: "",
//       description: "",
//     },
//     validators: {
//       onSubmit: formSchema,
//     },
//     onSubmit: async () => {
//       form.reset();
//       toast.success("Message Sent!", {
//         // description: (
//         //   <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
//         //     <code>{JSON.stringify(value, null, 2)}</code>
//         //   </pre>
//         // ),
//         position: "top-center",
//         classNames: {
//           content: "flex flex-col gap-2",
//         },
//         style: {
//           "--border-radius": "calc(var(--radius)  + 4px)",
//         } as React.CSSProperties,
//       });
//     },
//   });

//   return (
//     <Card className="w-full sm:max-w-md">
//       <CardHeader>
//         <CardTitle className="text-3xl">Powerlifting Intake Form</CardTitle>

//       </CardHeader>
//       <CardContent>
//         <form
//           id="bug-report-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//             form.handleSubmit();
//           }}
//         >
//           <FieldGroup>
//             <form.Field name="title">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
//                     <Input
//                       id={field.name}
//                       name={field.name}
//                       value={field.state.value}
//                       onBlur={field.handleBlur}
//                       onChange={(e) => field.handleChange(e.target.value)}
//                       aria-invalid={isInvalid}
//                       placeholder="Login button not working on mobile"
//                       autoComplete="off"
//                     />
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//             <form.Field name="description">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Description</FieldLabel>
//                     <InputGroup>
//                       <InputGroupTextarea
//                         id={field.name}
//                         name={field.name}
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         placeholder="I'm having an issue with the login button on mobile."
//                         rows={6}
//                         className="min-h-24 resize-none"
//                         aria-invalid={isInvalid}
//                       />
//                       <InputGroupAddon align="block-end">
//                         <InputGroupText className="tabular-nums">
//                           {field.state.value.length}/100 characters
//                         </InputGroupText>
//                       </InputGroupAddon>
//                     </InputGroup>
//                     <FieldDescription>
//                       Include steps to reproduce, expected behavior, and what
//                       actually happened.
//                     </FieldDescription>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//           </FieldGroup>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <Field orientation="horizontal">
//           <Button type="button" variant="outline" onClick={() => form.reset()}>
//             Reset
//           </Button>
//           <Button type="submit" form="bug-report-form">
//             Submit
//           </Button>
//         </Field>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ClientIntakeForm;

const ClientIntakeForm = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Card className="w-full sm:max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl">
          Powerlifting Client Intake Form
        </CardTitle>
        <CardDescription>Test Form</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="flex gap-2 items-center mb-4">
                <User size={24} />
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
                    <Input type="tel" placeholder="(000) 000-0000" />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="pt-4">
        <Field orientation="horizontal">
          <Button variant="secondary">Reset</Button>
          <Button>Send Form</Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default ClientIntakeForm;
