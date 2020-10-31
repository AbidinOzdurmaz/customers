import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers: [CustomerService]
})
export class CustomerlistComponent implements OnInit {

  constructor(private customerService: CustomerService,
    private alertifyfService: AlertifyService) { }
  title = "Müşteri Listesi";
  customerlist: Customer[];

  ngOnInit(): void {
    this.showCustomer();
  }

  showCustomer() {
    this.customerService.getProducts().subscribe(data => {
      this.customerlist = data;
    });
  }

  deleteCustomer(id: number) {
    if (confirm('Müşteri Silinsin mi')) {
      this.customerService.deleteCustomer(id).subscribe(res => {
      });
      location.reload();
    }

  }
}
