import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers:[CustomerService]
})
export class CustomerlistComponent implements OnInit {

  constructor(private customerService:CustomerService) {}
  title="Müşteri Listesi";

  ngOnInit(): void {
    this.customerService.getProducts().subscribe(data=>{
      this.customerlist = data;
    });
  }

  /*
  customerlist:Customer[]=[
    {id:1,firstName:"Abidin",lastName:"Özdurmaz",email:"abidinozd@gmail.com"},
    {id:2,firstName:"Musa",lastName:"Özdurmaz",email:"musaozdurmaz@gmail.com"},
    {id:3,firstName:"Nur",lastName:"Özdurmaz",email:"nürozdurmaz@gmail.com"}

  ];
  */
    customerlist:Customer[];

}
