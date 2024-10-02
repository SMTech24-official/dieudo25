"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
      <Input
        type="text"
        name="query"
        placeholder="Search services..."
        className="flex-1"
      />
      <Button type="submit" className="bg-lemon/80 hover:bg-lemon text-coal">
        Search
      </Button>
    </form>
  );
}
