import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import howItWorkImage from "@/assets/how-it-works.jpg";
import SectionHeader from "../section/SectionHeader";

const steps = [
  {
    title: "Sign up",
    description:
      "Start by creating an account with a valid email. This takes less than 2 minutes.",
  },
  {
    title: "Fill out the application",
    description:
      "Detail your skills, background, and bio for prospective clients.",
  },
  {
    title: "Verify your email",
    description:
      "We will email you to verify the information you provided in your application.",
  },
  {
    title: "Success!",
    description:
      "Once approved, login to your account and you will be good to go.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          className="text-left items-start"
          subTitle="Find short-term work with 4 simple steps"
          title="How it works"
          description="Soufflé powder halvah cake candy. Jelly-o croissant pie shortbread brownie sweet cookie."
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-1 bg-lime-400 h-full ml-4"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={howItWorkImage}
                alt="Person working on a laptop"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
