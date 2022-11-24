import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users');
    //this.httpClient.get("http://127.0.0.1:8080/laptop")
  }

getLaptops(){
  return this.httpClient.get("http://localhost:8080/laptop");
}
addLaptop(laptop:any){
  return this.httpClient.post('http://localhost:8080/laptop',laptop);
}

}
