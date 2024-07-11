import { AiFillStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="border rounded-md bg-base-200 p-4 justify-between flex flex-col gap-2 group">
      <div className="flex flex-col gap-2">
        <div className="w-full aspect-square rounded overflow-hidden bg-base-100">
          <img
            src="https://kbdfans.com/cdn/shop/files/3_ee64d2f3-cf6f-4233-8151-ee99a5e70890_360x.jpg?v=1720428293"
            alt=""
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-300"
          />
        </div>

        <div className="flex gap-0.5 text-yellow-500 text-base">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} />
          ))}
        </div>

        <h3 className="font-bold line-clamp-2">Zoom75 Keyboard by Meletrix</h3>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-content/70 text-sm">Only 58 pieces in stock</p>

        <p className="font-bold text-secondary text-xl">$100.00</p>

        <Link
          to={`/products/${1}`}
          className="btn btn-primary min-h-0 h-10 rounded-md btn-block"
        >
          View Details <BiRightArrowAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
