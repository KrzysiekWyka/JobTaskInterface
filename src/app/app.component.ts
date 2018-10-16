import { Component } from "@angular/core";
import { OrderMode } from "./enums/order-mode";
import { Item } from "./models/item";
import { OrderService } from "./order.service";
import { Order } from "./models/order";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  OrderMode = OrderMode;
  activeMode = OrderMode.RESULT;
  activeOrder: Order;
  ordersHistory: Order[];

  constructor(private orderService: OrderService) {}

  sendItems(model: Item[]) {
    this.orderService.sendItems(model).subscribe(res => {
      this.activeOrder = res as Order;
    });
  }

  loadOrderHistory() {
    this.orderService.all().subscribe(res => {
      this.ordersHistory = res;
    });
  }
}
