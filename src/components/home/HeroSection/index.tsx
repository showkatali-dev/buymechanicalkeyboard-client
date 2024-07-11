import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-5 container flex gap-4 xl:h-[540px] 2xl:h-[600px] mb-8">
      <div className="flex-1 h-full rounded-md overflow-hidden relative">
        <img
          src="/images/banner.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 z-[1] p-20 bg-gradient-to-br from-primary/50 via-primary/30 to-transparent text-white">
          <p className="font-semibold mb-4">
            Get up to 30% off on your first $150 purchase
          </p>

          <h1 className="font-bold text-5xl leading-snug mb-4">
            Do not miss our amazing Mechanical Keyboards
          </h1>

          <p className="font-medium mb-8 opacity-95">
            We have prepared special discounts for you. Don't miss these
            opportunities...
          </p>

          <Link to="/products" className="btn btn-primary text-base rounded-md">
            Shop Now <BsArrowRight className="animate-bounce-x ml-3" />
          </Link>
        </div>
      </div>
      <div className="w-80 h-full rounded-md overflow-hidden shrink-0">
        <img
          src="/images/banner2.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
