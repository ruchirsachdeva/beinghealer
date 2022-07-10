import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  blogs: any = [];
  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.getBlogs();
    window.scrollTo(0, 0);
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;
    });
  }
  setRouteAuth(val: string) {
    localStorage.setItem(val, val);
  }
}
