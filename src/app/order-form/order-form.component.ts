import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { Item } from "../models/item";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.css"]
})
export class OrderFormComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<Item[]> = new EventEmitter();
  orderForm: FormGroup;
  backEndEndpoint = environment.backEndEndpoint;

  constructor(private fb: FormBuilder) {}

  get items() {
    return this.orderForm.get("items") as FormArray;
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      id: ["", Validators.required],
      weight: [
        0,
        [Validators.required, Validators.min(0.1), Validators.max(500)]
      ]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(i) {
    this.items.removeAt(i);
  }

  submit() {
    this.onSubmit.emit(this.items.getRawValue());
  }
}
