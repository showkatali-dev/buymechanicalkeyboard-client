import CustomerInfoForm from "@/components/checkout/CustomerInfoForm";
import ProductInformation from "@/components/checkout/ProductInformation";

const CheckoutPage = () => {
  return (
    <main className="container mb-16">
      <div className="grid grid-cols-2 gap-8 py-8">
        <CustomerInfoForm />

        <ProductInformation />
      </div>
    </main>
  );
};

export default CheckoutPage;
