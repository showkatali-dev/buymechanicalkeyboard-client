import { AiOutlinePlus } from "react-icons/ai";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProductInputs } from "@/interface/productInputs";

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IProductInputs>();

  const onSubmit: SubmitHandler<IProductInputs> = (data) => {
    console.log(data);
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 mb-4 px-5"
          >
            <label className="form-control gap-1">
              <span className="font-medium">
                Product Name <span className="text-error">*</span>
              </span>
              <input
                type="text"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("name", {
                  required: "Product name is required",
                  maxLength: {
                    value: 100,
                    message: "Product name cannot exceed 100 characters",
                  },
                })}
                data-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-error">{errors.name.message}</p>
              )}
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">
                Price <span className="text-error">*</span>
              </span>
              <input
                type="number"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 0,
                    message: "Price cannot be negative",
                  },
                })}
                data-invalid={errors.price ? "true" : "false"}
              />
              {errors.price && (
                <p className="text-sm text-error">{errors.price.message}</p>
              )}
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">
                Description <span className="text-error">*</span>
              </span>
              <textarea
                className="textarea rounded-md textarea-bordered focus:border-transparent min-h-16 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("description", {
                  required: "Description is required",
                })}
                data-invalid={errors.description ? "true" : "false"}
              ></textarea>
              {errors.description && (
                <p className="text-sm text-error">
                  {errors.description.message}
                </p>
              )}
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">
                Available Quantity <span className="text-error">*</span>
              </span>
              <input
                type="number"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("availableQuantity", {
                  required: "Available Quantity is required",
                  min: {
                    value: 1,
                    message: "Minimum quantity is 1",
                  },
                })}
                data-invalid={errors.availableQuantity ? "true" : "false"}
              />
              {errors.availableQuantity && (
                <p className="text-sm text-error">
                  {errors.availableQuantity?.message}
                </p>
              )}
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">
                Rating <span className="text-error">*</span>
              </span>
              <select
                className="select rounded-md select-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("rating", { required: "Rating is required" })}
                data-invalid={errors.rating ? "true" : "false"}
              >
                <option value="5">5 Star</option>
                <option value="4">4 Star</option>
                <option value="3">3 Star</option>
                <option value="2">2 Star</option>
                <option value="1">1 Star</option>
              </select>
              {errors.rating && (
                <p className="text-sm text-error">{errors.rating?.message}</p>
              )}
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">
                Image <span className="text-error">*</span>
              </span>
              <input
                type="text"
                className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("image", {
                  required: "Image is required",
                })}
                data-invalid={errors.image ? "true" : "false"}
              />
              {errors.image && (
                <p className="text-sm text-error">{errors.image?.message}</p>
              )}
            </label>

            <label className="form-control gap-1">
              <span className="font-medium">
                Brand <span className="text-error">*</span>
              </span>
              <select
                className="select rounded-md select-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-secondary data-[invalid=true]:ring-error data-[invalid=true]:ring-1"
                {...register("brand", { required: "Brand is required" })}
                data-invalid={errors.brand ? "true" : "false"}
              >
                <option value="5">Logitech</option>
              </select>
              {errors.brand && (
                <p className="text-sm text-error">{errors.brand?.message}</p>
              )}
            </label>

            <button
              type="submit"
              className="btn btn-primary rounded-md text-base"
            >
              Add Product
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
