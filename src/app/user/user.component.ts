import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,AfterViewInit {
 user:any;
 userFormData=[]
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
     let res = this.http.get('https://jsonplaceholder.typicode.com/users');
     res.subscribe((data)=>{
      this.user = data;
     });
  }
  ngAfterViewInit(){
    console.log(this.user);
  }
  

}
