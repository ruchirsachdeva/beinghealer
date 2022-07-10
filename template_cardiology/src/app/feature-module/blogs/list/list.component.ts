import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  blogs: any = [];
  firstBlock: any = [];
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.getBlogs();
    this.getBlogdetails();
    window.scrollTo(0, 0);
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;
    });
  }

  getBlogdetails() {
    this.commonService.getBlogsDetails(1).subscribe((res) => {
      this.firstBlock = res;
    });
  }
  setRouteAuth(val: string) {
    localStorage.setItem(val, val);
  }
}
