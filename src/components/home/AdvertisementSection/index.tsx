import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
const AdvertisementSection = () => {
  return (
    <section className="bg-accent mb-12 py-4">
      <section className="grid grid-cols-4 divide-x rounded-md">
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <FaShippingFast className="text-4xl text-white" />

          <div className="space-y-0.5">
            <h2 className="font-semibold text-lg text-white">Free Shipping</h2>
            <p className="text-sm text-primary-content">On order over $100</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <RiSecurePaymentFill className="text-4xl text-white" />

          <div className="space-y-0.5">
            <h2 className="font-semibold text-lg text-white">
              Quick & Secure Payment
            </h2>
            <p className="text-sm text-primary-content">Fast and 100% Secure</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <AiOutlineDollarCircle className="text-4xl text-white" />

          <div className="space-y-0.5">
            <h2 className="font-semibold text-lg text-white">Big Cashback</h2>
            <p className="text-sm text-primary-content">Over 25% Cashback</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <MdOutlineContactSupport className="text-4xl text-white" />

          <div className="space-y-0.5">
            <h2 className="font-semibold text-lg text-white">24/7 Support</h2>
            <p className="text-sm text-primary-content">Ready for you</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdvertisementSection;
