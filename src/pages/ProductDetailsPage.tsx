import { MdFlashOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetailsPage = () => {
  return (
    <main className="container mb-16">
      <div className="grid grid-cols-2 gap-12 py-12 max-w-5xl mx-auto">
        <div className="w-full flex justify-end h-fit sticky top-24">
          <img
            src="https://kbdfans.com/cdn/shop/files/3_ee64d2f3-cf6f-4233-8151-ee99a5e70890_360x.jpg?v=1720428293"
            alt=""
            className="w-full rounded-md max-w-[500px]"
          />
        </div>

        <div className="space-y-4 h-fit sticky top-24">
          <div className="flex items-center gap-3">
            <div className="badge font-medium badge-primary rounded text-xs">
              Logitech
            </div>

            <div className="flex gap-0.5 text-yellow-500 text-base">
              {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
          </div>

          <h1 className="font-bold text-2xl">Zoom75 Keyboard by Meletrix</h1>

          <p className="opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            ipsum error adipisci dignissimos!
          </p>

          <p className="text-secondary badge rounded font-medium bg-base-content/5 badge-lg text-sm">
            <MdFlashOn className="inline text-base mr-1" /> Only 58 pieces in
            stock
          </p>

          <p className="font-bold text-secondary text-3xl">$100.00</p>

          <div className="flex gap-4">
            <div className="join border border-base-content/20 rounded-md">
              <button className="btn p-0 btn-ghost btn-square rounded-md hover:bg-transparent text-xl text-primary">
                -
              </button>
              <span className="btn cursor-auto text-base btn-ghost hover:bg-transparent no-animation btn-square">
                01
              </span>
              <button className="btn p-0 btn-ghost btn-square rounded-md hover:bg-transparent text-xl text-primary">
                +
              </button>
            </div>

            <button className="btn text-base btn-primary rounded-md">
              Add to cart <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
