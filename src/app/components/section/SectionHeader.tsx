import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  className?: string;
  subTitle?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  className,
  subTitle,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "text-center  flex flex-col items-center justify-center px-4 pb-[80px]",
        className
      )}
    >
      {subTitle && (
        <p className="text-base font-medium text-blue-600 mb-2">{subTitle}</p>
      )}
      <h2 className="text-5xl font-medium text-gray-900 mb-4">{title}</h2>
      {description && <p className="text-gray-600 text-base">{description}</p>}
    </div>
  );
}
