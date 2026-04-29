import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
  Tailwind,
  Hr,
} from "@react-email/components";
import type { FormData } from "@/components/forms/clientIntakeForm";

const IntakeEmail = (formData: FormData) => {
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
              <Row label="Height" value={formData.height} />
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
                  value={formData.results.map((r) => r.result).join(", ")}
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

const Row = ({ label, value }: { label: string; value: string }) => (
  <Section className="mb-3">
    <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide m-0">
      {label}
    </Text>
    <Text className="text-gray-800 m-0 mt-1">{value || "—"}</Text>
  </Section>
);

export default IntakeEmail;
