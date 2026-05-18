import type { IntakeFormData } from "@/lib/schemas/intakeSchema";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const IntakeEmail = (formData: IntakeFormData) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Body className="bg-gray-200 font-sans">
          <Container className="mx-auto py-8 px-4 max-w-xl">
            <Section className="bg-white rounded-lg p-8 mb-4">
              <Heading
                as="h1"
                className="text-3xl font-bold text-gray-900 m-0 mb-2"
              >
                Powerlifting Client Intake
              </Heading>
              <Text className="text-gray-500 m-0">New submission received</Text>
            </Section>

            {/* Personal Info */}
            <Section className="bg-white rounded-lg p-8 mb-4">
              <Heading as="h2" className="font-semibold text-gray-900 m-0 mb-6">
                Personal Info
              </Heading>
              <Hr className="border-gray-200 mb-6" />

              <Row label="Name" value={formData.name} />
              <Row
                label="Date of Birth"
                value={formData.dob ? formData.dob.toLocaleDateString() : "—"}
              />
              <Row
                label="Height"
                value={`${formData.height} ${formData.heightUnit}`}
              />
              <Row
                label="Weight"
                value={`${formData.weight} ${formData.weightUnit}`}
              />
              <Row label="Email" value={formData.email} />
              <Row label="Phone" value={formData.phone} />
            </Section>

            {/* Goals */}
            <Section className="bg-white rounded-lg p-8 mb-4">
              <Heading as="h2" className="font-semibold text-gray-900 m-0 mb-6">
                Goals
              </Heading>
              <Hr className="border-gray-200 mb-6" />
              <Row label="Short-Term Goal" value={formData.shortTermGoal} />
              <Row label="Long-Term Goal" value={formData.longTermGoal} />
              <Row
                label="Competing Soon"
                value={formData.competingSoon ? "Yes" : "No"}
              />
              {formData.competingSoon && (
                <Row
                  label="Competition Date"
                  value={
                    formData.competitionDate
                      ? formData.competitionDate.toLocaleDateString()
                      : "—"
                  }
                />
              )}
              <Row label="Why Powerlifting" value={formData.whyPowerlifting} />
            </Section>

            {/* Training History */}
            <Section className="bg-white rounded-lg p-8 mb-4">
              <Heading as="h2" className="font-semibold text-gray-900 m-0 mb-6">
                Training History
              </Heading>
              <Hr className="border-gray-200 mb-6" />
              <Row label="Years Lifting" value={formData.yearsLifting} />
              <Row
                label="Best Squat"
                value={`${formData.bestSquat} ${formData.liftUnit}`}
              />
              <Row
                label="Best Bench"
                value={`${formData.bestBench} ${formData.liftUnit}`}
              />
              <Row
                label="Best Deadlift"
                value={`${formData.bestDeadlift} ${formData.liftUnit}`}
              />
              <Row
                label="Previous Competitions"
                value={formData.hasCompeted ? "Yes" : "No"}
              />
              {formData.hasCompeted && formData.results.length > 0 && (
                <Row
                  label="Competition Results"
                  value={
                    <ul className="pl-8 mt-1 mb-0 leading-8 marker:text-xs">
                      {formData.results.map((r, i) => (
                        <li key={i}>{r.result}</li>
                      ))}
                    </ul>
                  }
                />
              )}
              <Row
                label="Athletic Background"
                value={formData.athleticBackground}
              />
              <Row
                label="Training Schedule"
                value={formData.trainingSchedule}
              />
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <Section className="mb-3">
    <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide m-0">
      {label}
    </Text>
    {typeof value === "string" ? (
      <Text className="text-gray-800 m-0 mt-1">{value || "—"}</Text>
    ) : (
      <div className="text-gray-800 mt-1">N/A</div>
    )}
  </Section>
);

// IntakeEmail.PreviewProps = {
//   name: "John Doe",
//   dob: new Date("1995-06-15"),
//   height: "72",
//   weight: "200",
//   weightUnit: "lbs",
//   email: "john@example.com",
//   phone: "(555) 555-5555",
//   shortTermGoal: "Compete at 198lbs within 6 months",
//   longTermGoal: "Total 1500lbs raw within 2 years",
//   competingSoon: true,
//   competitionDate: new Date("2025-06-01"),
//   whyPowerlifting: "I love the sport and want to see how far I can go",
//   yearsLifting: "3-5 years",
//   bestSquat: "450",
//   bestBench: "315",
//   bestDeadlift: "500",
//   liftUnit: "lbs",
//   hasCompeted: true,
//   results: [
//     { result: "2024 USAPL State Meet — 1st place 198lbs" },
//     { result: "2024 RPS Regional — 2nd place 198lbs" },
//     { result: "2023 USAPL Nationals — 5th place 198lbs" },
//   ],
//   athleticBackground:
//     "Football in high school, recreational lifting for 5 years",
//   trainingSchedule: "4 days a week, conjugate method",
// } satisfies FormData;

export default IntakeEmail;
