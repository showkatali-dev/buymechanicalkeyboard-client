import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { IProduct } from "@/interface/product";

interface IProps {
  products: IProduct[];
}

const ProductListTable = ({ products }: IProps) => {
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
        {products.map((product, index) => {
          const { _id, name, price, brandName } = product;

          return (
            <tr key={_id} className="duration-200 cursor-auto group">
              <th className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
                {index + 1}
              </th>

              <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
                <h2 className="font-semibold text-base">{name}</h2>
              </td>
              <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
                <p className="font-semibold">${price}</p>
              </td>

              <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200">
                <p className="font-medium">{brandName}</p>
              </td>
              <td className="border-0 border-y bg-base-100 group-hover:bg-base-200 duration-200 w-[100px]">
                <div className="flex items-center justify-end gap-3">
                  <EditProduct product={product} />

                  <DeleteProduct />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductListTable;
