"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = [
  {
    value: "-price",
    label: "Price - Low to High",
  },
  {
    value: "price",
    label: "Price - High to Low",
  },
];

const ProductsSortby = () => {
  return (
    <Select>
      <SelectTrigger className="btn min-h-0 h-9 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:outline-0 font-semibold rounded-md border bg-base-100 hover:bg-base-100 no-animation w-[200px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent align="start" className="w-[200px] p-0">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ProductsSortby;
