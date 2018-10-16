import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrderFormComponent } from "./order-form/order-form.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { OrderResultComponent } from "./order-result/order-result.component";
import { OrderService } from "./order.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    OrderHistoryComponent,
    OrderResultComponent
  ],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
