import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { VehicleComponent } from './Pages/vehicle/vehicle.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { CustomerComponent } from './Pages/customer/customer.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehicleComponent,
    LayoutComponent,
    BookingComponent,
    CustomerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
