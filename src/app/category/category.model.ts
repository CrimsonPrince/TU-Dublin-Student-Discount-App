import { Discount } from './discount.model';
export interface Category {
    id: string;
    name: string;
    imageUrl: string;
    discounts: Discount[];
}
