import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { ToastrService } from 'ngx-toastr';
import {MailService} from "../mail.service";
import {GoogleAnalyticsService} from "ngx-google-analytics";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  id:any;
  blogdetails: any = [];
  blogs: any = [];
  categories: Map<string, number> = new Map([]);
  tags: string[] = [];

  comments: any = [];
  name = '';
  email = '';
  usercomment = '';
  filterTerm!: string;
  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public mailService: MailService,
    private route: ActivatedRoute,
    public router: Router,
    private gaService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.getBlogdetails();
    this.getBlogs();
    this.getComments();
    window.scrollTo(0, 0);
  }

  getBlogdetails() {
    this.commonService.getBlogsDetails(this.id).subscribe((res) => {
      this.blogdetails = res;
    });
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;

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
    });
  }

  navigateToBlogGridSearchResult(key: string) {
    this.gaService.event('filter_blog_detail', 'filter_blog', 'Filter Blog Detail');
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/blog-grid?filterTerm=' + key);
    });
  }

  getComments() {
    this.commonService.getComments().subscribe((result) => {
      this.comments = result;
    });
  }

  navigate(blog:any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/blog-details?id=' + blog.id);
    });
  }

  comment() {
    if (this.name === '' || this.email === '' || this.usercomment === '') {
      this.toastr.error('', 'Please enter mandatory field');
    } else {


      let params = {
        name: this.name,
        message: "Request to add the comment for post with id " + this.id + " . Comment is: " + this.usercomment,
        email: this.email
      }
      this.mailService.send(params).then((response) => {
        this.toastr.success(response, 'Comment has been sent for review!');
        this.name = '';
        this.email = '';
        this.usercomment = '';
      }, (err) => {
        this.toastr.error('There was a problem in adding comment!' + "  " + err);
      });


      // TODO Uncomment this after connecting backend
      // let params = {
      //   id: this.comments.length + 1,
      //   name: this.name,
      //   email: this.email,
      //   comment: this.usercomment,
      // };
      // this.commonService.createComment(params).subscribe((res) => {
      //   this.toastr.success('', 'Comment successfully!');
      //   this.name = '';
      //   this.email = '';
      //   this.usercomment = '';
      //   this.getComments();
      // });
    }
  }
}
