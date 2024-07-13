import ProductsPageTopBar from "@/components/products/ProductsPageTopBar";
import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsResult from "@/components/products/ProductsResult";

const ProductsPage = () => {
  return (
    <main className="container mb-16">
      <ProductsPageTopBar />

      <ProductsResult />
      <ProductsPagination />
    </main>
  );
};

export default ProductsPage;
