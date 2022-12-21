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

  constructor(public commonService: CommonServiceService,
              private route: ActivatedRoute,
              public router: Router,
              private gaService: GoogleAnalyticsService) {
    super(3);
  }

  override ngOnInit(): void {
    this.filterTerm = this.route.snapshot.queryParams['filterTerm'];
    this.getBlogs();
    super.ngOnInit();
    this.goToTopOfPage();
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;

      this.updateItemCountForBlogs(result);

      this.categories = result
        .reduce<Map<string, number>>((p,c,i,a)=>{
          if(p.has(c.type)) {
            // @ts-ignore
            p.set(c.type, p.get(c.type) + 1)
          } else {
            p.set(c.type, 1)
          }
          return p
        },  new Map([]))

      this.tags = [...new Set<string>(result.flatMap(r=>r.tags))]
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
    this.updateItemCountForBlogs(this.blogs)
    this.gaService.event('filter_blog_list', 'filter_blog', 'Filter Blog List');
  }

  private updateItemCountForBlogs(blogs: any[]) {
    this.setItemCount(blogs.filter(x=>{
      return this.filterTerm === undefined || JSON.stringify(x).indexOf(this.filterTerm) > -1
    }).length)
  }
}
