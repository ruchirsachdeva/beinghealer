import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CommonServiceService } from '../../common-service.service'
import {Blog} from "../../model/domains";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	blogs : Blog[] = [];
	title:any ;
	description:any ;
  file!: File;
  type:any ;
  img:any ;
	modalRef!:BsModalRef ;
  imageNestedModalRef!:BsModalRef ;
	blogDetails!:Blog;
  id:any;
  constructor(private modalService: BsModalService,private commonService: CommonServiceService) { }

  ngOnInit(): void {
  	this.getBlogs();
  }

  openModal(template: TemplateRef<any>) {
  	this.id = "";
	    this.title = "";
	    this.type = "";
	    this.description = "";
    this.modalRef = this.modalService.show(template,{class: 'modal-lg modal-dialog-centered'});
  }

  decline() {
    this.modalRef.hide();
  }

  imageModal(template: TemplateRef<any>) {
    this.imageNestedModalRef = this.modalService.show(template,{class: 'modal-lg modal-dialog-centered'});
  }

  editModal(template: TemplateRef<any>,blog:any) {
    // Don't update blogDetails after.
  	this.blogDetails = blog;
    // Save form changes in the variables below.
  	this.id = blog['id'];
  	this.title = blog['title'];
  	this.type = blog['type'];
    this.description = blog['description'];
    this.img = blog['img'];

    this.modalRef = this.modalService.show(template,{class: 'modal-lg modal-dialog-centered'});
  }

  deleteModal(template: TemplateRef<any>,blog:any) {
    this.id = blog['id'];
    this.modalRef = this.modalService.show(template,{class: 'modal-sm modal-dialog-centered'});
  }

  deleteBlog() {
  	this.commonService.deleteBlog(this.id).subscribe((data : any)=>{
      this.modalRef.hide();
      this.getBlogs();
    })
  }

  closeImageNestedModal() {
    this.imageNestedModalRef.hide();
  }

  update() {
    alert(this.file);
    // copy all original blogDetails
    let params = this.blogDetails;

    // Overwrite all updated fields
    params.id = this.blogs.length + 1;
    params.title = this.title;
    params.description = this.description;
    params.type = this.type;
    params.img = this.img;

    this.commonService.updateBlog(params,this.id).subscribe((data : any)=>{
      	this.getBlogs();
        this.modalRef.hide();
    })
  }

  save() {
    const blog: Blog = {
      id: this.blogs.length + 1,
      img: this.img,
      title: this.title,
      description: this.description,
      createdBy: "Anita Sachdeva",
      createdAt: new Date(),
      comments: 0,
      type: this.type,
      tags: [],
      status: "active"
    };
  	this.commonService.createBlogs(blog).subscribe((data : any)=>{
      this.modalRef.hide();
      this.getBlogs();
    })
  }

    getBlogs() {
	  	this.commonService.getBlogs()
	  		.subscribe(res=>{
	  			this.blogs = res
	  		})
    }


  private updateFormImageAsByteArray(addedFile: File) {
    alert(addedFile);
    let bytes
    var reader = new FileReader();
    reader.onload = (event: any) => {
      bytes = event.target.result;
      // Update the form image as byte array.
      this.img = bytes;
    };
    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };
    reader.readAsDataURL(addedFile);
    return bytes;
  }

  onFileChange(event: Event) {
    // TODO add validations for file type and size and also chek how can image be optimized, maybe ng-optimized-image etc.
    // File is converted to byte array and saved as img property in blog
    // @ts-ignore
    this.updateFormImageAsByteArray(event.target.files[0]);
  }
}
