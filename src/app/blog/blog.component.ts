import { AfterViewInit } from '@angular/core';
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
  services: any[] = [];

  active = 1;
  page: number = 1;
  limit: number = 6;
  handleScrollEvent: boolean = false;
  constructor(public commonService: CommonServiceService,
              private route: ActivatedRoute,
              public router: Router,
              private gaService: GoogleAnalyticsService) {
    super(3);
  }

  override ngOnInit(): void {
    console.log("### ngOnInit");
    this.filterTerm = this.route.snapshot.queryParams['filterTerm'];
    this.getBlogs(this.page, this.limit);
    this.getServices();
    super.ngOnInit();
    this.goToTopOfPage();

    // Navigating from other pages, onScroll() is being called by default 
    // and hence API call to load blogs happen without actual scrolling, to handle this added this
    setTimeout(() => {
      this.handleScrollEvent = true;
    }, 1000);
  }

  getServices() {
    this.commonService.getServices().subscribe((res) => {
      this.services = res;
      this.active = this.services.findIndex((service) => service.service === this.filterTerm) + 2;
    });
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
    this.active = this.services.findIndex((service) => service.service === this.filterTerm) + 2; //+2 to make default index 1
    this.getBlogs(this.page = 1, this.limit);
    this.gaService.event('filter_blog_list', 'filter_blog', 'Filter Blog List');
  }

  private updateItemCountForBlogs(blogs: any[]) {
    this.setItemCount(blogs.filter(x=>{
      return this.filterTerm === undefined || JSON.stringify(x).indexOf(this.filterTerm) > -1
    }).length)
  }

  onScroll() {
    if (this.handleScrollEvent) {
      console.log("### scrolled!!");
      this.getBlogs(++this.page, this.limit)
    }
  }

  tabChanged(event: any) {
    this.filterTerm = "";
    if (event.nextId > 1) {
      this.filterTerm = this.services[event.nextId - 2].service;
    }
    this.updateItemCount()
  }
}
