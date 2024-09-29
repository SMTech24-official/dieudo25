import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 mb-2">
            Find short-term work with 4 simple steps
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soufflé powder halvah cake candy. Jelly-o croissant pie shortbread
            brownie sweet cookie.
          </p>
        </div>

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
                src="/placeholder.svg?height=400&width=600"
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
