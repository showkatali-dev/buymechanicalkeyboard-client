import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
const ProductListTable = () => {
  return (
    <table className="table max-sm:!text-xs">
      <thead>
        <tr className="text-sm font-medium uppercase">
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="duration-200 cursor-auto group">
          <th className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
            1
          </th>

          <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
            <h2 className="font-semibold text-base">Mechanical Keyboard</h2>
          </td>
          <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
            <p className="font-semibold text-secondary">$100</p>
          </td>

          <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
            <p className="font-medium">Logitech</p>
          </td>
          <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200 w-[100px]">
            <div className="flex items-center justify-end gap-3">
              <button className="btn btn-sm btn-primary btn-square rounded-md">
                <AiOutlineEdit />
              </button>
              <button className="btn btn-sm btn-secondary btn-square rounded-md">
                <AiOutlineDelete />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductListTable;
