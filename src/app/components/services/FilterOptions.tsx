import { Button } from "@/components/ui/button";

export default function FilterOptions() {
  return (
    <div className="flex gap-4 mb-6">
      <Button variant="outline">Service options</Button>
      <Button variant="outline">Seller details</Button>
      <Button variant="outline">Budget</Button>
      <Button variant="outline">Delivery time</Button>
    </div>
  );
}
