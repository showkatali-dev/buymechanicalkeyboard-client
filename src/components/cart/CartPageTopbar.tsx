const CartPageTopbar = () => {
  return (
    <section className="bg-base-100 pt-5 sticky top-14 z-10">
      <section className="rounded-md bg-base-200 px-4 py-3 flex justify-between items-center mb-5">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-xs rounded-full border-2 transition border-base-content/20"
          />

          <span>All</span>
        </label>

        <div className="flex items-center gap-4">
          <p>
            Total: <span className="text-secondary font-semibold">$100</span>
          </p>

          <button className="btn-secondary text-base rounded-md btn min-h-0 h-10">
            Checkout
          </button>
        </div>
      </section>
    </section>
  );
};

export default CartPageTopbar;
