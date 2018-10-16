import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./models/item";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";
import { Order } from "./models/order";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  backEndEndpoint = environment.backEndEndpoint;
  constructor(private httpClient: HttpClient) {}

  sendItems(model: Item[]) {
    return this.httpClient
      .post<Partial<Order>>(`${this.backEndEndpoint}api/order`, model, {
        observe: "response"
      })
      .pipe(
        map(res => {
          if (res.status === 200) return res.body;
          else if (res.status === 422) {
            alert("Validation Problem");
          } else {
            alert("Unexpected http status");
          }
          return {};
        })
      );
  }

  all() {
    return this.httpClient.get<Order[]>(`${this.backEndEndpoint}api/order`);
  }
}
