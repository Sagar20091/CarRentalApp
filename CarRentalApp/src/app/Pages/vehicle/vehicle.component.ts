import { Component, inject, OnInit } from '@angular/core';
import { CarService } from 'src/app/car/car.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  carservice=inject(CarService)
  carList: any[]=[];
  constructor(){

  }
  ngOnInit(): void {
    this.getCars();
  }


  getCars(){
    this.carservice.getCars().subscribe((res:any)=>{
      this.carList=res.data;
      console.log(this.carList)
    },error=>{
      
    })
  }
  

}
