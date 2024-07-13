/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";

const ProductsPriceRangeSlider = () => {
  const [value, setValue] = useState([0, 100]);
  const [realTimeValue, setRealTimeValue] = useState({
    min: 0,
    max: 0,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="btn min-h-0 h-9 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:outline-0 font-semibold rounded-md border bg-base-100 hover:bg-base-100 no-animation w-[200px] justify-between">
          <span>
            Price Range{" "}
            <span className="text-xs opacity-70">
              ({value[0]} - {value[1]})
            </span>{" "}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <h3 className="font-semibold mb-4 text-primary">Price Range</h3>
        <div className="p-1 pt-2">
          <div className="relative min-h-[25px] slider-container">
            <RangeSlider
              min={0}
              max={100}
              defaultValue={value}
              onInput={function (this: any, value: Array<number>) {
                this.value = value;
                setRealTimeValue({
                  min: value[0],
                  max: value[1],
                });
              }}
              rangeSlideDisabled={true}
              onThumbDragEnd={function (this: any) {
                setValue(this.value);
              }}
              className="h-1"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-primary font-medium slider-value">
            <span>BDT {realTimeValue.min?.toFixed(2)}</span>
            <span>BDT {realTimeValue.max?.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between text-xs mt-1 font-medium slider-value">
            <span>Min</span>
            <span>Max</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProductsPriceRangeSlider;
