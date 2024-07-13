import CartItem from "@/components/cart/CartItem";
import CartPageTopbar from "@/components/cart/CartPageTopbar";

const CartPage = () => {
  return (
    <main className="container mb-16">
      <div className="max-w-3xl mx-auto">
        <CartPageTopbar />
        <div className="divide-y divide-base-content/20">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
