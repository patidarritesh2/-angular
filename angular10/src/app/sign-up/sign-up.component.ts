import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  http: any;
  firstname ='';
  lastname ='';
  mobileno ='';
  dob = '';

  constructor(private httpservice: BackendService) { }


  ngOnInit(): void {
  }
  form:any={
    // url:'https://jsonplaceholder.typicode.com/posts/1/comments',
    url:"http://api.sunilos.com:9080/ORSP10/User/get",
    // url:"http://api.sunilos.com:9080/ORSP10/User/get/90",
    data:{},
    res:[]

    
  }


    getData(){
       var _self=this
      this.http.getDataDemo(this.form.url, function(res:any){
        console.log(res)
        _self.form.res=res

        }
      );

    }

  save(){
    let _self=this
    this.http.postData(this.form.url,{},function(res:any){
    _self.form.res=res.result.data;
      console.error(res)
      
      
    });
    

    }

}
