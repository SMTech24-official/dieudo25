import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  className?: string;
}

export default function SectionHeader({ className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto px-4 pb-[80px]", className)}>
      <p className="text-sm text-blue-600 mb-2">
        What our freelancers are best at
      </p>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Popular Freelance Services
      </h2>
      <p className="text-gray-600">
        Soufflé powder halvah cake candy. Jelly-o croissant pie shortbread
        brownie sweet cookie.
      </p>
    </div>
  );
}
