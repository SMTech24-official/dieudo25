import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Car, Calendar } from "lucide-react"

export default function Offer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          Exclusive Offer
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
        <div className="text-center mb-4">
          <span className="text-5xl font-extrabold text-orange-500">20% OFF</span>
          <p className="text-xl mt-2">Your First Detailing Service</p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Car className="h-5 w-5 text-orange-500" />
            <span>Professional-grade cleaning</span>
          </li>
          <li className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-orange-500" />
            <span>Valid for 30 days</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}