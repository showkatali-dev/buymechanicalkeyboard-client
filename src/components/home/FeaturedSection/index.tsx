import ProductCard from "@/components/products/ProductCard";

const FeaturedSection = () => {
  return (
    <section className="container mb-16">
      <div className="border rounded-md">
        <div className="border-b p-4 lg:p-5">
          <h1 className="text-2xl lg:text-3xl font-bold">Featured Products</h1>
        </div>

        <div className="p-4 lg:p-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {[...Array(6)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
