
import React, { useState } from "react";
import { BookFilters } from "@/types";
import { departments, bookConditions } from "@/services/mockData";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

interface BookFiltersProps {
  onFilterChange: (filters: BookFilters) => void;
  initialFilters?: BookFilters;
}

const BookFiltersPanel = ({ onFilterChange, initialFilters }: BookFiltersProps) => {
  const [filters, setFilters] = useState<BookFilters>(initialFilters || {
    searchTerm: "",
    department: undefined,
    condition: undefined,
    minPrice: 0,
    maxPrice: 200,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: value[0],
      maxPrice: value[1] || 200,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleResetFilters = () => {
    const resetFilters: BookFilters = {
      searchTerm: "",
      department: undefined,
      condition: undefined,
      minPrice: 0,
      maxPrice: 200,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-serif font-semibold">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleResetFilters}
          className="text-gray-500 hover:text-univred flex items-center text-xs h-7"
        >
          <X className="h-3 w-3 mr-1" /> Clear All
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="searchTerm">Search</Label>
          <Input
            id="searchTerm"
            name="searchTerm"
            placeholder="Title, author, or ISBN"
            value={filters.searchTerm || ""}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="department">Department</Label>
          <Select
            value={filters.department}
            onValueChange={(value) => handleSelectChange("department", value)}
          >
            <SelectTrigger id="department" className="mt-1">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="condition">Condition</Label>
          <Select
            value={filters.condition}
            onValueChange={(value) => handleSelectChange("condition", value)}
          >
            <SelectTrigger id="condition" className="mt-1">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="any">Any Condition</SelectItem>
                {bookConditions.map((condition) => (
                  <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label>Price Range</Label>
            <span className="text-sm text-gray-500">
              ${filters.minPrice} - ${filters.maxPrice}
            </span>
          </div>
          
          <Slider
            defaultValue={[filters.minPrice || 0, filters.maxPrice || 200]}
            min={0}
            max={200}
            step={5}
            onValueChange={handlePriceChange}
            className="mt-6"
          />
        </div>

        <Button 
          onClick={handleApplyFilters} 
          className="w-full bg-univblue hover:bg-univblue-dark"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default BookFiltersPanel;
