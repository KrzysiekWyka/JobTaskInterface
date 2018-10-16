import { Truck } from "./truck";

export interface Order {
  price: number;
  trucks: Truck[];
}
