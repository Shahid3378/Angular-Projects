import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataBinding1';
  name:string = "Shinchan";
  age : number = 5;
  fun1(){
    this.age = 10;
    console.log("Age is : "+this.age);
  }
  fun2(){
    this.age = 5;
    console.log("Age is :" +this.age);
  }
}
