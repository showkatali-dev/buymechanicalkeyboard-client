import ProductsPriceRangeSlider from "./ProductsPriceRangeSlider";
import ProductsResetFilter from "./ProductsResetFilter";
import ProductsSortby from "./ProductsSortby";

const ProductsPageTopBar = () => {
  return (
    <section className="rounded-md bg-base-200 px-4 py-3 flex justify-between items-center mb-5 mt-4">
      <div className="flex items-center gap-6">
        <ProductsSortby />

        <ProductsPriceRangeSlider />
      </div>

      <ProductsResetFilter />
    </section>
  );
};

export default ProductsPageTopBar;
