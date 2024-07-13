import { IResponse } from "@/interface/apiResponse";
import { baseApi } from "./baseApi";
import { IBrand } from "@/interface/brand";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBrands: build.query({
      query: () => ({
        url: "/brands",
        method: "GET",
      }),
      transformResponse: (response: IResponse<IBrand[]>) => response,
      providesTags: ["brand"],
    }),
  }),
});

export const { useGetAllBrandsQuery } = brandApi;
