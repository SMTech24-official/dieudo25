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
      <Button className="bg-secondary hover:bg-secondary/80 text-white flex items-center active:scale-95 transition-all duration-300 gap-2 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search group-hover:fill-white"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <span>Search</span>
      </Button>
    </form>
  );
}
