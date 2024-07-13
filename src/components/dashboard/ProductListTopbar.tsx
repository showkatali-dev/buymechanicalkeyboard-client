import AddProduct from "./AddProduct";
import DashboardSearchProduct from "./DashboardSearchProduct";

const ProductListTopbar = () => {
  return (
    <section className="border-b bg-base-100 py-3 flex justify-between items-center mb-5 mt-4">
      <h1 className="text-2xl font-bold">Product List</h1>
      <div className="flex gap-4">
        <DashboardSearchProduct />
        <AddProduct />
      </div>
    </section>
  );
};

export default ProductListTopbar;
