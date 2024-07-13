const CustomerInfoForm = () => {
  return (
    <section className="sticky top-16 h-fit">
      <h1 className="font-bold text-2xl mb-4">Enter Your Details</h1>

      <hr className="mb-4" />

      <div className="grid gap-4 mb-4">
        <label className="form-control gap-1">
          <span className="font-medium">Name</span>
          <input
            type="text"
            className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
            placeholder="John Doe"
          />
        </label>

        <label className="form-control gap-1">
          <span className="font-medium">Email</span>
          <input
            type="email"
            className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
            placeholder="N5sD1@example.com"
          />
        </label>

        <label className="form-control gap-1">
          <span className="font-medium">Phone Number</span>
          <input
            type="tel"
            className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
            placeholder="0123456789"
          />
        </label>

        <label className="form-control gap-1">
          <span className="font-medium">Delivery Address</span>
          <input
            type="text"
            className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
            placeholder="House No. 123, ABC Road, XYZ City"
          />
        </label>

        <label className="form-control gap-1">
          <span className="font-medium">Payment Type</span>
          <div className="join border border-base-content/20 w-full focus-within:border-secondary">
            <label className="flex flex-1 px-4 join-item h-11 items-center gap-2 rounded-md border-secondary has-[:checked]:bg-secondary/10 has-[:checked]:text-secondary has-[:checked]:font-semibold">
              <input
                type="radio"
                name="payment_type"
                className="radio radio-xs radio-secondary"
                defaultChecked
              />
              <span>Cash on delivery</span>
            </label>

            <label className="flex flex-1 px-4 join-item h-11 items-center gap-2 rounded-md border-secondary has-[:checked]:bg-secondary/10 has-[:checked]:text-secondary has-[:checked]:font-semibold">
              <input
                type="radio"
                name="payment_type"
                className="radio radio-xs radio-secondary"
              />
              <span>Stripe</span>
            </label>
          </div>
        </label>

        <button className="btn btn-primary rounded-md text-base">
          Submit Order
        </button>
      </div>
    </section>
  );
};

export default CustomerInfoForm;
