import { AiOutlineClose } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between gap-4">
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary mr-2 checkbox-xs rounded-full border-2 self-center border-base-content/20 transition"
          />
          <div className="border p-0.5 w-16 h-16 rounded">
            <img
              src="https://kbdfans.com/cdn/shop/files/3_ee64d2f3-cf6f-4233-8151-ee99a5e70890_360x.jpg?v=1720428293"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg">Mechanical Keyboard 1</h3>
            <p className="text-sm text-secondary font-semibold">$100</p>
          </div>
        </div>

        <div className="flex gap-4 justify-end items-center">
          <div className="join border border-base-content/15 rounded-md">
            <button className="btn btn-sm p-0 btn-ghost btn-square rounded-md hover:bg-transparent text-base text-primary">
              -
            </button>
            <span className="btn btn-sm cursor-auto text-sm btn-ghost rounded-md hover:bg-transparent no-animation btn-square">
              01
            </span>
            <button className="btn btn-sm p-0 btn-ghost btn-square rounded-md hover:bg-transparent text-base text-primary">
              +
            </button>
          </div>
          <button className="btn btn-sm btn-ghost btn-square rounded-full text-error">
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
