import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {PaginationComponent} from "../common/pagination/pagination.component";
import {ActivatedRoute, Router} from "@angular/router";
import {GoogleAnalyticsService} from "ngx-google-analytics";
import {Blog} from "../model/domains";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent extends PaginationComponent implements OnInit {
  blogs: Blog[] = [];
  categories: Map<string, number> = new Map([]);
  tags: string[] = [];
  filterTerm!: string;

  page: number = 0;
  limit: number = 6;

  constructor(public commonService: CommonServiceService,
              private route: ActivatedRoute,
              public router: Router,
              private gaService: GoogleAnalyticsService) {
    super(3);
  }

  override ngOnInit(): void {
    this.filterTerm = this.route.snapshot.queryParams['filterTerm'];
    this.getBlogs(this.page, this.limit);
    super.ngOnInit();
    this.goToTopOfPage();
  }

  getAllBlogs(items: any[]): any[] {
    return items;
    debugger;
  }

  getBlogs(page: number, limit: number) {
    this.commonService.getBlogs(this.filterTerm, page, limit).subscribe((result) => {

      this.blogs.push(...result);

      this.categories = this.blogs
        .reduce<Map<string, number>>((p,c,i,a)=>{
          if(p.has(c.type)) {
            // @ts-ignore
            p.set(c.type, p.get(c.type) + 1)
          } else {
            p.set(c.type, 1)
          }
          return p
        },  new Map([]))

      this.tags = [...new Set<string>(this.blogs.flatMap(r=>r.tags))]
    })
  }

  updateFilterTerm(key: string) {
    this.filterTerm = key;
    this.updateItemCount();
    this.goToTopOfPage();
    this.gaService.event('filter_by_click_blog_list', 'filter_blog', 'Filter By Click Blog List');
  }

  // Called when filter term is updated either through search input or tags or category click.
  updateItemCount() {
    this.blogs = [];
    this.getBlogs(this.page = 0, this.limit)
    // this.updateItemCountForBlogs(this.blogs)
    this.gaService.event('filter_blog_list', 'filter_blog', 'Filter Blog List');
  }

  private updateItemCountForBlogs(blogs: any[]) {
    debugger;
    this.setItemCount(blogs.filter(x=>{
      return this.filterTerm === undefined || JSON.stringify(x).indexOf(this.filterTerm) > -1
    }).length)
  }

  onScroll() {
    // console.log("scrolled!!");
    this.getBlogs(++this.page, this.limit)
  }
}
