import ClientIntakeForm from "@/components/forms/clientIntakeForm";
import { Analytics } from "@vercel/analytics/next";

const page = () => {
  return (
    <main className="min-h-screen flex justify-center m-8 md:m-24">
      <ClientIntakeForm />
      <Analytics />
    </main>
  );
};

export default page;
