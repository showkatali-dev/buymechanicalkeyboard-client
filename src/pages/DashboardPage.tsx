import ProductListTable from "@/components/dashboard/ProductListTable";
import ProductListTopbar from "@/components/dashboard/ProductListTopbar";

const DashboardPage = () => {
  return (
    <main className="container mb-16">
      <ProductListTopbar />
      <ProductListTable />
    </main>
  );
};

export default DashboardPage;
