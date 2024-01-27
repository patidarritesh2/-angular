import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  getData(url:any){
    return this.http.get(url).subscribe();
  }
  getDataDemo(url:any, callback:any){
    this.http.get(url).subscribe(res=>{
      callback(res);
    }
    );
  }
  
  postData(url:any,{},callback:any){

    this.http.post(url,{}).subscribe(
      res=>{
        callback(res);
      }
    );  
}
}
