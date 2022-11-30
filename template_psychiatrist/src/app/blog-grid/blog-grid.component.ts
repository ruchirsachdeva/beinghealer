import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {PaginationComponent} from "../common/pagination/pagination.component";
import {filter} from "rxjs";

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css'],
})
export class BlogGridComponent extends PaginationComponent implements OnInit {
  blogs: any[] = [];
  filterTerm!: string;

  constructor(public commonService: CommonServiceService) {
    super(4);
  }

  override ngOnInit(): void {
    this.getBlogs();
    super.ngOnInit();
    this.goToTopOfPage();
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;
      this.setItemCount(result.length)
    })
  }

}
