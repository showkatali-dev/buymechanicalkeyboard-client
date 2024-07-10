import { BsFillKeyboardFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

const SelectBrand = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <button className="btn btn-primary min-h-0 h-10 rounded-md min-w-48 text-base">
          <BsFilterLeft className="text-xl" /> All Brands{" "}
          <BiChevronDown className="ml-auto text-lg" />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        align="start"
        className="-mt-1 px-0 py-2 min-w-fit border-2 border-primary"
      >
        <Link
          to="/products?brand=mechanical-keyboard"
          className="px-4 py-2 transition hover:text-primary-content hover:bg-primary flex items-center gap-2"
        >
          <BsFillKeyboardFill /> Mechanical Keyboard
        </Link>
        <Link
          to="/products?brand=mechanical-keyboard"
          className="px-4 py-2 transition hover:text-primary-content hover:bg-primary flex items-center gap-2"
        >
          <BsFillKeyboardFill /> Mechanical Keyboard
        </Link>
        <Link
          to="/products?brand=mechanical-keyboard"
          className="px-4 py-2 transition hover:text-primary-content hover:bg-primary flex items-center gap-2"
        >
          <BsFillKeyboardFill /> Mechanical Keyboard
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};

export default SelectBrand;
