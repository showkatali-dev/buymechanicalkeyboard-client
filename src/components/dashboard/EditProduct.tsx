import { BiLoader } from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IProduct } from "@/interface/product";
import { IProductInputs } from "@/interface/productInputs";
import { useGetAllBrandsQuery } from "@/redux/api/brandApi";
import { useUpdateProductMutation } from "@/redux/api/productApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface IProps {
  product: IProduct;
}

const EditProduct = ({ product }: IProps) => {
  const { _id, name, price, description, availableQuantity, rating, image } =
    product;

  const [open, setOpen] = useState(false);

  const { data } = useGetAllBrandsQuery(undefined);
  const [updateProduct, { isLoading, isError }] = useUpdateProductMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IProductInputs>();

  const onSubmit: SubmitHandler<IProductInputs> = async (data) => {
    if (isLoading) return;
    const { error } = await updateProduct({
      id: _id,
      body: {
        ...data,
        availableQuantity: Number(data.availableQuantity),
        price: Number(data.price),
        rating: Number(data.rating),
      },
    });

    if (error) {
      console.error(error);
      return;
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="btn btn-sm btn-primary btn-square rounded-md">
          <AiOutlineEdit />
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden">
        <div className="bg-base-200 px-5 py-3">
          <DialogTitle asChild>
            <h1 className="font-bold text-xl">Add New Product</h1>
          </DialogTitle>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 mb-4 px-5"
          >
            {isError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Failed</AlertTitle>
                <AlertDescription>Something went wrong!</AlertDescription>
              </Alert>
            )}

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
                defaultValue={name}
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
                defaultValue={price}
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
                defaultValue={description}
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
                defaultValue={availableQuantity}
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
                defaultValue={rating}
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
                defaultValue={image}
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
                {data?.data?.map((brand) => {
                  const { _id, title } = brand;
                  return (
                    <option key={_id} value={_id}>
                      {title}
                    </option>
                  );
                })}
              </select>
              {errors.brand && (
                <p className="text-sm text-error">{errors.brand?.message}</p>
              )}
            </label>

            <button
              type="submit"
              className="btn btn-primary rounded-md text-base"
            >
              {isLoading ? (
                <>
                  <BiLoader className="animate-spin" /> Updating...
                </>
              ) : (
                "Update Product"
              )}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;
