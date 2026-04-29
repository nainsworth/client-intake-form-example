import {
  Body,
  Column,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type { FormData } from "@/components/forms/clientIntakeForm";

const confirmationEmail = ({ name }: Pick<FormData, "name">) => {
  return (
    <Tailwind>
      <Html>
        <Body className="bg-zinc-800 font-sans">
          <Container className=" text-gray-100 px-12 py-6">
            <Section>
              <Text className="text-center text-5xl font-bold">LOGO</Text>
            </Section>
          </Container>
          <Container className="bg-white px-12 py-4 rounded-2xl">
            <Section>
              <Heading as="h1" className="mb-6">
                Application Received
              </Heading>
              <Text>Hi {name.split(" ")[0]}!</Text>
              <Text>
                Thank you for sending in your powerlifting intake form!
                I&apos;ve received everything and I&apos;m already looking
                forward to working with you!
              </Text>
            </Section>
            <Hr />
            <Section>
              <Heading as="h2">Here&apos;s what happens next:</Heading>
              <Text>
                1. I&apos;ll review your intake form in detail over the next
                24-48 hours.
              </Text>
              <Text>
                2. You&apos;ll get a follow-up email from me with an invite to
                schedule our onboarding call (about 30-45 minutes). We&apos;ll
                use this time to talk through your goals, answer any questions,
                and make sure we&apos;re aligned before your first program.
              </Text>
              <Text>
                3. After our call, I&apos;ll build out your individualized
                program and you&apos;ll receive it within 3-5 business days.
              </Text>
              <Text>
                In the meantime, if anything important comes up — a tweaked
                back, a missed training week, a meet you&apos;re eyeing — just
                reply to this email and let me know. The more I know going in,
                the better I can tailor things to you.
              </Text>
            </Section>
            <Hr />
            <Section>
              <Text className="mb-0">Excited to get to work!</Text>
              <Text className="mt-0 italic">&ndash; Signature</Text>
            </Section>
          </Container>
          <Container className="text-gray-100 pb-6 pt-2">
            <Section className="text-center">
              <Row>
                <Column align="center">
                  <Row className="table-cell h-11 w-14 align-bottom mb-0">
                    <Column className="pr-4">
                      <Link href="#">
                        <Img
                          alt="Facebook"
                          height="22"
                          src="http://localhost:3000/facebook.png"
                          width="22"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="#">
                        <Img
                          alt="Instagram"
                          height="22"
                          src="http://localhost:3000/instagram.png"
                          width="22"
                        />
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Text className="mt-2 text-xs">
                &copy; {new Date().getFullYear()} Business Name
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default confirmationEmail;
