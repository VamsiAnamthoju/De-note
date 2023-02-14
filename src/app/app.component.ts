import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DE-NOTE';
  
   constructor(){ }

   tabledata : any = [
    {No: '1', name: "Vamsi", company:'TCS', designation:"Angular developer"},
    {No: '2', name: "Sai",   company:'Apple', designation:"IOS developer"},
    {No: '3', name: "Mohan", company:'Infosys', designation:"Python developer"},
    {No: '4', name: "Navaz", company:'Capegemini', designation:"Java developer"},
    {No: '5', name: "Vijay", company:'Google', designation:"Angular developer"},
    {No: '6', name: "Ram",   company:'Microsoft', designation:"IOS developer"},
    {No: '7', name: "Krishna", company:'Wipro', designation:"Python developer"},
    {No: '8', name: "Ahmed", company:'Cognizant', designation:"Java developer"},
  ];

  checkedItem: any;
  doclick(data: string){
      if(data == 'angular'){
        this.checkedItem = "Angular developer";
      }else if(data == 'java'){
        this.checkedItem = "Java developer";
      }else if(data == 'python'){
        this.checkedItem = "Python developer";
      }else if(data == 'ios'){
        this.checkedItem = "IOS developer";
      }
}
};