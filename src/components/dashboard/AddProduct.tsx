import { AiOutlinePlus } from "react-icons/ai";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="btn btn-primary min-h-0 rounded-md h-10">
          <AiOutlinePlus /> Add Product
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden">
        <div className="bg-base-200 px-5 py-3">
          <h1 className="font-bold text-xl">Add New Product</h1>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          <div className="grid gap-4 mb-4 px-5">
            <label className="form-control gap-1">
              <span className="font-medium">Product Name</span>
              <input
                type="text"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
              />
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">Price</span>
              <input
                type="number"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
                placeholder="N5sD1@example.com"
              />
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">Description</span>
              <textarea className="textarea rounded-md textarea-bordered focus:border-transparent min-h-16 focus:outline-0 focus:ring-1 focus:ring-secondary"></textarea>
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">Available Quantity</span>
              <input
                type="number"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
                placeholder="House No. 123, ABC Road, XYZ City"
              />
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">Rating</span>
              <select className="select rounded-md select-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary">
                <option value="5">5 Star</option>
                <option value="4">4 Star</option>
                <option value="3">3 Star</option>
                <option value="2">2 Star</option>
                <option value="1">1 Star</option>
              </select>
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">Image</span>
              <input
                type="text"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary"
                placeholder="House No. 123, ABC Road, XYZ City"
              />
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">Brand</span>
              <select className="select rounded-md select-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary">
                <option value="5">Logitech</option>
              </select>
            </label>

            <button className="btn btn-primary rounded-md text-base">
              Add Product
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
