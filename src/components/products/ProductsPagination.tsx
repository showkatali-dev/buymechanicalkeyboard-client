import { cn } from "@/lib/utils";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ProductsPagination = () => {
  const [pageNum, setPageNum] = useState(1);
  const [totalPage] = useState(3);

  return (
    <div className="flex items-center justify-between py-3 mt-1">
      <div className="text-sm font-medium opacity-70">
        Showing 1 to 10 of 25 entries
      </div>

      <div className="flex justify-end text-sm gap-0.5 font-medium">
        <div
          onClick={() => pageNum > 1 && setPageNum(pageNum - 1)}
          className={cn(
            "inline-flex items-center justify-center w-8 duration-100 cursor-pointer h-7 hover:bg-neutral/10 opacity-0 pointer-events-none",
            pageNum > 1 && "opacity-100 pointer-events-auto"
          )}
        >
          <BiChevronLeft />
        </div>

        {[...Array(totalPage)].map((_, i) => (
          <div
            key={i}
            onClick={() => setPageNum(i + 1)}
            className={cn(
              "inline-flex items-center justify-center w-8 duration-100 cursor-pointer h-7 hover:bg-primary/10",
              i + 1 === pageNum ? "bg-primary/10" : ""
            )}
          >
            {i + 1}
          </div>
        ))}
        <div
          onClick={() => pageNum < totalPage && setPageNum(pageNum + 1)}
          className={cn(
            "inline-flex items-center justify-center w-8 duration-100 cursor-pointer h-7 hover:bg-primary/10 opacity-0 pointer-events-none",
            pageNum < totalPage && "opacity-100 pointer-events-auto"
          )}
        >
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ProductsPagination;
