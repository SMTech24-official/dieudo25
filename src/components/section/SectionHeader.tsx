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
        "text-center  flex flex-col items-center justify-center px-4   md:pb-padding_medium pb-[20px]",
        className
      )}
    >
      {subTitle && (
        <p className="sm:text-base text-sm font-medium text-lilac sm:mb-2 mb-1">{subTitle && subTitle}</p>
      )}
      <h2 className="md:text-5xl text-3xl font-medium text-gray-900 sm:mb-2 mb-1">{title}</h2>
      {description && <p className="text-gray-600 sm:text-base text-sm">{description}</p>}
    </div>
  );
}
