import ProductCard from "./ProductCard";

const ProductsResult = () => {
  return (
    <section className="grid grid-cols-5 gap-4">
      {[...Array(20)].map((_, index) => (
        <ProductCard key={index} />
      ))}
    </section>
  );
};

export default ProductsResult;
