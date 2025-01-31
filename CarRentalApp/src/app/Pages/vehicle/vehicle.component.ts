import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/car/car.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
onAddNewCar() {
  this.isEditMode=false;
  this.carForm.reset();
}
  carservice=inject(CarService)
  carList: any[]=[];
  carForm :FormGroup= new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl(""),
    model: new FormControl(""),
    year: new FormControl(""),
    color: new FormControl(""),
    dailyRate: new FormControl(""),
    carImage: new FormControl(""),
    regNo: new FormControl("")
  })
  isEditMode: boolean=false;
  constructor(){

  }
  ngOnInit(): void {
    this.getCars();
  }

  

  OnEdit(item:any){
    this.isEditMode = true;
    this.carForm.patchValue({
      carId: item.carId,
      brand: item.brand,
      model: item.model,
      year: item.year,
      color: item.color,
      dailyRate: item.dailyRate,
      carImage: item.carImage,
      regNo: item.regNo

    })

  }


  getCars(){
    this.carservice.getCars().subscribe((res:any)=>{
      this.carList=res.data;
      console.log(this.carList)
    },error=>{
      
    })
  }

  saveCar(){
    const carform=this.carForm.value;
    console.log(carform)
    this.carservice.createCar(carform).subscribe((res:any)=>{
      if(res.result) {
        alert("Record Creattion Succes");
        this.getCars();
      } else {
        alert(res.message)
      }
    }) 

  }

  updateCar() {
    const carData = this.carForm.value;
    this.carservice.updateCars(carData).subscribe(
      (res: any) => {
        if (res.result) {
          alert("Car Updated Successfully");
          this.getCars();
        } else {
          alert(res.message);
        }
      },
      (error) => {
        console.error("Error updating car:", error);
        alert("Failed to update car");
      }
    );
  }

  Ondelete(id: any){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete) {
      this.carservice.deleteCars(id).subscribe((res:any)=>{
        if(res.result) {
          alert("Record Delete Succes");
          this.getCars();
        } else {
          alert(res.message)
        }
      }) 
    }

  }

  

}
