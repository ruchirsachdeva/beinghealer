import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  invoices : any = [];
  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
  	this.commonService.getTransactions()
  		.subscribe(res=>{
  			this.invoices = res;
  		})
  }

}
