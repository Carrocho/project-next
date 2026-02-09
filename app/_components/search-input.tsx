import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        className="border-border rounded-full"
        type="text"
        placeholder="Pesquise serviços ou barbearias"
      />
      <Button className="rounded-full" variant="default" size="icon">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
