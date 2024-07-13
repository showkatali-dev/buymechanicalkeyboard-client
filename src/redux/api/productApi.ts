import { IResponse } from "@/interface/apiResponse";
import { baseApi } from "./baseApi";
import { IProduct } from "@/interface/product";
import { IProductInputs } from "@/interface/productInputs";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    getAllProducts: build.query({
      query: (search?: string | undefined) => ({
        url: `/products${search ? `?${search}` : ""}`,
        method: "GET",
      }),
      providesTags: ["product"],
      transformResponse: (response: IResponse<IProduct[]>) => response,
    }),

    updateProduct: build.mutation({
      query: (data: { id: string; body: IProductInputs }) => ({
        url: `/products/${data.id}`,
        method: "PUT",
        body: data.body,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} = productApi;
