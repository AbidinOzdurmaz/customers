import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CustomerlistComponent } from '../customerlist/customerlist.component';


@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css'],
  providers:[CustomerService]
})
export class CustomerformComponent implements OnInit {

  constructor(private customerService:CustomerService,
              private alertifyfService:AlertifyService) { }

  title="Müşteri Ekle";
  ngOnInit(): void {
  }

  addComponent(data){
    this.customerService.addCustomer(data).subscribe((res)=>{
      location.reload();
      this.alertifyfService.success("Müşteri başarıyla eklendi");
    },(err)=>{
      console.log(err);
    });
  }
  
}
