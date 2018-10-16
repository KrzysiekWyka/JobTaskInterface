import { Component, OnInit, Input } from "@angular/core";
import { Order } from "../models/order";

@Component({
  selector: "app-order-result",
  templateUrl: "./order-result.component.html",
  styleUrls: ["./order-result.component.css"]
})
export class OrderResultComponent implements OnInit {
  @Input()
  order: Order;

  constructor() {}

  ngOnInit() {}
}
