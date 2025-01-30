import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http :HttpClient) { }

  apiUrl :string="https://freeapi.miniprojectideas.com/api/CarRentalApp/"

  getCars(){
    return this.http.get(`${this.apiUrl}GetCars`)
  }

  createCars(obj:any){
    return this.http.post(`${this.apiUrl}CreateNewCars`,obj)
  }

  updateCars(obj:any){
    return this.http.put(`${this.apiUrl}UpdateCar`,obj)
  }

  deleteCars(cardid:any){
    return this.http.delete(`${this.apiUrl}DeleteCarbyCarId=${cardid}`)
  }

}
