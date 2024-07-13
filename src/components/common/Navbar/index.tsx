import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchField from "./SearchField";
import MyCart from "./MyCart";
import SelectBrand from "./SelectBrand";
import MenuItemsForDesktop from "./MenuItemsForDesktop";
import DiscountBadge from "./DiscountBadge";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current!;
    const checkTopDistanceOfElement = (element: HTMLDivElement) => {
      return () => {
        if (element) {
          if (element.getBoundingClientRect().top <= 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      };
    };

    checkTopDistanceOfElement(element)();

    window.addEventListener("scroll", checkTopDistanceOfElement(element));

    return () =>
      window.removeEventListener("scroll", checkTopDistanceOfElement(element));
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between container py-4">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-1">
            <img
              src="/images/logo.webp"
              alt=""
              className="w-12"
              width={48}
              height={48}
            />
            <span className="text-3xl uppercase text-primary font-medium">
              <span className="font-extrabold text-black">Buy</span> Keyboard
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {/* hotline number */}
            <div className="flex items-center gap-2">
              <div className="inline-flex w-10 h-10 rounded-full border border-primary p-2 justify-center items-center text-primary">
                <FiPhoneCall />
              </div>

              <div>
                <p className="text-sm font-medium">Hotline Number</p>
                <p className="font-semibold text-xl text-primary">
                  +123 456 789
                </p>
              </div>
            </div>

            {/* search bar */}
            <SearchField />
          </div>
        </div>

        <MyCart />
      </nav>

      <nav
        ref={ref}
        className={cn(
          "sticky top-0 z-20 transition bg-base-200 border-b border-b-base-content/10",
          isScrolled && "bg-base-100"
        )}
      >
        <div className="flex items-center justify-between container">
          <div className="flex items-center gap-8 py-3">
            <SelectBrand />

            <MenuItemsForDesktop />
          </div>

          <DiscountBadge />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
