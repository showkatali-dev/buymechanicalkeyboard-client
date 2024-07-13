import { IBrand } from "./brand";

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  brand: IBrand;
  brandName?: string;
  description: string;
  price: number;
  availableQuantity: number;
  rating: number;
  isDeleted: boolean;
}
