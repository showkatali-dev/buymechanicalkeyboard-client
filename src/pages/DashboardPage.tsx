import ProductListTable from "@/components/dashboard/ProductListTable";
import ProductListTopbar from "@/components/dashboard/ProductListTopbar";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { ReactNode } from "react";
import { BiLoader } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

const DashboardPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useGetAllProductsQuery(
    searchParams.toString()
  );

  let ProductData: ReactNode;

  if (error) {
    ProductData = (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-error text-center">
          {error?.data?.message as string}
        </p>
      </div>
    );
  } else if (isLoading) {
    ProductData = (
      <div className="flex justify-center items-center min-h-[200px]">
        <BiLoader className="text-3xl animate-spin" />
      </div>
    );
  } else if (data) {
    ProductData = <ProductListTable products={data.data} />;
  } else {
    ProductData = (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-neutral text-center">No Result Found</p>
      </div>
    );
  }

  return (
    <main className="container mb-16">
      <ProductListTopbar />
      {ProductData}
    </main>
  );
};

export default DashboardPage;
