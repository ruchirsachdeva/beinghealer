import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {PaginationComponent} from "../common/pagination/pagination.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent extends PaginationComponent implements OnInit {
  blogs: any[] = [];
  filterTerm: string = "";

  constructor(public commonService: CommonServiceService) {
    super(3);
  }

  override ngOnInit(): void {
    this.filterTerm = ""
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
