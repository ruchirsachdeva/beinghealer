import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {PaginationComponent} from "../common/pagination/pagination.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent extends PaginationComponent implements OnInit {
  blogs: any[] = [];
  categories: Map<string, number> = new Map([]);
  tags: string[] = [];
  filterTerm!: string;

  constructor(public commonService: CommonServiceService,
              private route: ActivatedRoute,
              public router: Router) {
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
      this.setItemCount(result.length)

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

      this.tags = [...new Set(result.flatMap(r=>r.tags))]
    })
  }

  updateFilterTerm(key: string) {
    this.filterTerm = key;
    this.goToTopOfPage();
  }
}
