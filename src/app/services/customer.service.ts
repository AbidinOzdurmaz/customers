import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerlistComponent } from '../components/customerlist/customerlist.component';
import { Customer } from '../model/customer';


@Injectable()
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  path="http://localhost:8080/customers";
  
  getProducts():Observable<Customer[]>{
     return this.httpClient.get<Customer[]>(this.path);
  }

  deleteCustomer(id:number){
    return this.httpClient.delete('http://localhost:8080/customers/'+id);
  }

  addCustomer(data){
    return this.httpClient.post(this.path,data);
  }

}
