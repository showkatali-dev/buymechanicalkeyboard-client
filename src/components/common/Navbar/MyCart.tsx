import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

const MyCart = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <button className="shadow-sam btn rounded-md btn-primary min-h-0 h-11 px-5 btn-outline border-base-content/20 gap-2 text-base min-w-36">
          <span className="relative">
            <AiOutlineShoppingCart className="text-lg" />

            <span className="absolute badge badge-primary badge-sm -top-3 -right-3">
              3
            </span>
          </span>{" "}
          My Cart
        </button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="-mt-1 min-w-[450px]">
        <div className="p-4">
          <div className="flex items-center justify-between gap-8 mb-2">
            <h2 className="font-bold">Shopping Cart (3)</h2>

            <Link
              to="/cart"
              className="btn btn-xs px-5 btn-secondary rounded-md"
            >
              See all
            </Link>
          </div>

          <hr />

          <div className="divide-y">
            <div className="py-4">
              <div className="flex justify-between gap-4">
                <div className="flex gap-2">
                  <div className="border p-3 rounded">
                    <img src="/images/logo.webp" alt="" className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Mechanical Keyboard 1</h3>
                    <p className="text-xs">
                      1 x <span className="text-error">$100</span>
                    </p>
                  </div>
                </div>

                <button className="w-4 border border-error h-4 text-xs inline-flex justify-center items-center bg-error/5 text-error">
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MyCart;
