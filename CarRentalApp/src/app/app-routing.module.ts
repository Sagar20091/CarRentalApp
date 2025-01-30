import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { VehicleComponent } from './Pages/vehicle/vehicle.component';
import { BookingComponent } from './Pages/booking/booking.component';

const routes: Routes = [
  {
    path :'',
    redirectTo :'login',
    pathMatch :'full'
  }, {
    path: 'login',
    component: LoginComponent

  },
  // {
  //   path :'dashboard',
  //   component:DashboardComponent
  // },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path :'dashboard',
        component:DashboardComponent,
        title :'dashboard'
      },
      {
        path :'vehicle',
        component:VehicleComponent,
        title :'vehicle'
      },
      {
        path :'booking',
        component:BookingComponent,
         title :'booking'
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
