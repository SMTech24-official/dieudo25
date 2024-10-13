"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SectionHeader from "../section/SectionHeader";

const testimonials = [
  {
    name: "Mandy Moore",
    role: "Brand Strategist",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Tiramisu cake chocolate lollipop chocolate bar pastry dessert tootsie roll. Jelly cookie sesame snaps brownie cotton candy sweet cookie. Pie biscuit pastry candy brownie tootsie roll icing ice cream.",
  },
  {
    name: "Helena Adams",
    role: "Illustrator",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Tootsie roll gummi bears sweet roll oat cake caramels lollipop candy sweet cake. Marzipan tart gummies danish cotton candy topping jelly pastry. Apple pie halvah bear claw cotton candy brownie marshmallow fruitcake.",
  },
  {
    name: "Jackson Brag",
    role: "Front-end Developer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Jelly jelly beans shortbread bear claw macaroon donut marshmallow jujubes. Tootsie roll marshmallow liquorice pastry cheesecake muffin cotton candy tootsie roll. Candy canes pie wafer croissant muffin.",
  },
];

export default function SuccessStories() {
  return (
    <div className="py-padding_base px-4 md:px-6 lg:px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <SectionHeader
          title="Success Stories"
          description="Fruitcake wafer liquorice jelly shortbread."
        />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
            className="cursor-pointer overflow-hidden"
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-gray-700">{testimonial.quote}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
