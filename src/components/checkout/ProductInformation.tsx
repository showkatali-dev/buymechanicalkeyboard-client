const ProductInformation = () => {
  return (
    <section className="p-5 sticky top-16 h-fit">
      <div className="space-y-3 mb-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="border p-0.5 w-12 h-12 rounded relative">
              <img
                src="https://kbdfans.com/cdn/shop/files/3_ee64d2f3-cf6f-4233-8151-ee99a5e70890_360x.jpg?v=1720428293"
                alt=""
                className="w-full h-full"
              />

              <span className="badge badge-primary text-xs absolute font-semibold -top-2 -right-2 z-[1]">
                1
              </span>
            </div>

            <h3 className="font-semibold">Mechanical Keyboard 1</h3>
          </div>

          <p className="text-sm font-medium">$100</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="font-medium">Subtotal</h3>
          <p className="text-sm font-medium">$100</p>
        </div>

        <div className="flex justify-between">
          <h3 className="font-medium">Tax</h3>
          <p className="text-sm font-medium">$0</p>
        </div>

        <hr />

        <div className="flex justify-between">
          <h3 className="font-bold text-2xl">Total</h3>
          <p className="text-2xl font-bold">$0</p>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
