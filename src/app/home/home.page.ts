import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myText: string = "";
  price: number = null;
  sst: number = null;
  sst_amount: number = null;
  sst_price: number = null;

  constructor() {

  }

  calculateSST(){
    this.sst_amount = this.price * (this.sst/100);
    this.sst_price = Number(this.price) + Number(this.sst_amount)
  }

  btnClick(){
    this.myText = "Selamat Datang";
    // alert('Hello world');
    // let a: number;
    // a = 10;
    // a = true;

    let cars = [
      {model: "Proton Saga", cc: 1.5, color: "white"},
      {model: "Perodua MyVi", cc: 1.3, color: "black"},
      {model: "Toyota Vios", cc: 1.8, color: "blue"},
    ];

    // console.log(cars[1]);
    for (let y of cars){
      // console.log("I love to drive " + y.model + " in " + y.color);
      this.callData(y.model, y.color);
    }
  }

  callData(model: string, color: string){
    console.log("I love to drive " + model + " in " + color);
  }

  

}

