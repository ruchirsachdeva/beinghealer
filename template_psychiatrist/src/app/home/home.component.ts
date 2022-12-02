import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CommonServiceService } from "../common-service.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { SlickCarouselComponent } from "ngx-slick-carousel";
import {MailService} from "../mail.service";
import {ToastrService} from "ngx-toastr";
declare const $: any;

export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  // encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild("slickModal1") slickModal1!: SlickCarouselComponent;
  @ViewChild("slickModal2") slickModal2!: SlickCarouselComponent;
  @ViewChild("slickModal3") slickModal3!: SlickCarouselComponent;
  services: any[] =[]
  specialityList: any = [];
  doctors: any = [];
  slidepage: any;
  employeeCtrl = new FormControl();
  filteredEmployee: Observable<Doctors[]>;
  blogs: any = [];
  keyword = "name";
  searchDoctor = [];
  public countries = [
    {
      id: 1,
      name: "Albania",
      img: "image",
    },
    {
      id: 2,
      name: "Belgium",
    },
    {
      id: 3,
      name: "Denmark",
    },
    {
      id: 4,
      name: "Montenegro",
    },
    {
      id: 5,
      name: "Turkey",
    },
    {
      id: 6,
      name: "Ukraine",
    },
    {
      id: 7,
      name: "Macedonia",
    },
    {
      id: 8,
      name: "Slovenia",
    },
    {
      id: 9,
      name: "Georgia",
    },
    {
      id: 10,
      name: "India",
    },
    {
      id: 11,
      name: "Russia",
    },
    {
      id: 12,
      name: "Switzerland",
    },
  ];
  showModal: boolean = false;
  modalPath: String = ""

  showContactModal: boolean = false;
  name: string = "";
  email: string = "";
  usercomment: string = "";
  constructor(
    public router: Router,
    public commonService: CommonServiceService,
    public mailService: MailService,
    private toastr: ToastrService
  ) {
    this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
      startWith(""),
      map((employee) =>
        employee ? this._filterEmployees(employee) : this.doctors.slice()
      )
    );
  }

  ngOnInit() {

// Slick Slider

  if($('.our-service-slider').length > 0) {
    $('.our-service-slider').slick({
      dots: false,
      autoplay:false,
      infinite: true,
      variableWidth: true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:2,
          nav:true
        },
        1000:{
          items:3,
          nav:true,
          loop:false
        }
      }
    });
  }

  if($('.gallery-slider').length > 0) {
    $('.gallery-slider').slick({
      dots: false,
      autoplay:false,
      infinite: true,
      variableWidth: true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:2,
          nav:true
        },
        1000:{
          items:3,
          nav:true,
          loop:false
        }
      }
    });
  }



    window.scrollTo(0, 0);
    this.getspeciality();
    this.getDoctors();
    this.getblogs();
    this.getServices();

    // User's voice slider
    $(".testi-slider").each( () => {
      var $show = $(this).data("show");
      var $arr = $(this).data("arrow");
      var $dots = !$arr;
      var $m_show = $show;
      if ($show == 3) $m_show = $show - 1;
      $(this).slick({
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        autoplay: false,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow:
          '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-back"></i></button>',
        nextArrow:
          '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-forward"></i></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $m_show,
              slidesToScroll: 1,
              infinite: true,
              arrows: $arr,
              dots: $dots,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      });
    });
  }

  show(event: any)
  {
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    var path = srcAttr.nodeValue;
    this.showModal = true; // Show-Hide Image Modal Check
    this.modalPath = path;
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
    this.modalPath = "";
  }

  showContactModalWindow(event: any)
  {
    // var target = event.target || event.srcElement || event.currentTarget;
    // var srcAttr = target.attributes.src;
    // var path = srcAttr.nodeValue;
    this.showContactModal = true; // Show-Hide Contact Modal Check
    // this.modalPath = path;
  }
  //Bootstrap Contact Modal Close event
  hideContactModalWindow()
  {
    this.showContactModal = false;
    this.name = '';
    this.email = '';
    this.usercomment = '';
  }

  sendMessage() {
    if (this.name === '' || this.email === '' || this.usercomment === '') {
      this.toastr.error('', 'Please enter mandatory field');
    } else {
      let params = {
        name: this.name,
        message: this.usercomment,
        email: this.email
      }
      this.mailService.send(params).then((response) => {
        this.toastr.success(response, 'Message sent successfully!');
        this.hideContactModalWindow();
      }, (err) => {
        this.toastr.error('There was a problem in sending message!' + "  " + err);
      });
    }

  }

  getServices() {
    this.commonService.getServices().subscribe((res) => {
      this.services = res
    });
  }


  private _filterEmployees(value: string): Doctors[] {
    const filterValue = value.toLowerCase();
    return this.doctors.filter(
      (state:any) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  slides = [
    {
      name: "Anita Sachdeva",
      img: "assets/img/doctors/doctor-05.jpg",
      degree: "Clinical Hypnotherapist, Doctor of Naturopathy, Reiki Master",
      reviews: "(66)",
      address: "Panipat, India",
      date: "Available on Fri, 20 Mar",
      amount: "₹2000 per Hour",
    },
    {
      name: "Adarsh Sachdeva",
      img: "assets/img/doctors/doctor-01.jpg",
      degree: "Reiki Master",
      reviews: "(23)",
      address: "Panipat, India",
      date: "Available on Fri, 20 Mar",
      amount: "₹1500 per Hour",
    },
    {
      name: "Gennaro Weiner",
      img: "assets/img/doctors/doctor-02.jpg",
      degree: "MDS - Dental Cosmetology",
      reviews: "(35)",
      address: "Newyork, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$50 - $300",
    },
    {
      name: "Jerelyn Pino",
      img: "assets/img/doctors/doctor-03.jpg",
      degree: "MBBS, DNB - Cardiology",
      reviews: "(27)",
      address: "Georgia, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$100 - $400",
    },
    {
      name: "Marvin Campbell",
      img: "assets/img/doctors/doctor-05.jpg",
      degree: "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      reviews: "(66)",
      address: "Michigan, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$50 - $700",
    },
    {
      name: "Rieko Thrash",
      img: "assets/img/doctors/doctor-04.jpg",
      degree: "MBBS, MS - General Surgery",
      reviews: "(4)",
      address: "Louisiana, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$150 - $250",
    },
    {
      name: "Ultima Douglas",
      img: "assets/img/doctors/doctor-06.jpg",
      degree: "MS - Orthopaedics",
      reviews: "(52)",
      address: "Texas, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$100 - $500",
    },
    {
      name: "Neomah Oliveira",
      img: "assets/img/doctors/doctor-07.jpg",
      degree: "MBBS, MD - General Medicine",
      reviews: "(43)",
      address: "Kansas, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$100 - $1000",
    },
    {
      name: "Jillisa Tremblay",
      img: "assets/img/doctors/doctor-08.jpg",
      degree: "MBBS, MD - Dermatology",
      reviews: "(20)",
      address: "California, USA",
      date: "Available on Fri, 22 Mar",
      amount: "$100 - $400",
    },
  ];

  solutionSliderConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slideConfig3 = {
    dots: false,
    autoplay:false,
    infinite: true,
    variableWidth: true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:2,
        nav:true
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
    }
  };

  next() {
    this.slickModal1.slickNext();
  }

  prev() {
    this.slickModal1.slickPrev();
  }

  getspeciality() {
    this.commonService.getSpeciality().subscribe((res) => {
      this.specialityList = res;
    });
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
      this.slidepage = {
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      this.countries = [];
      this.doctors.forEach((index:any, i:any) => {
        this.countries.push({
          id: index.id,
          name: index.doctor_name,
        });
      });
    });
  }

  getblogs() {
    this.commonService.getBlogs().subscribe((res) => {
      this.blogs = res
        .filter(x=>{return x.id != 1})
        .filter(x=>x.id != 3)
        .filter(x=>x.id != 5);
    });
  }

  selectEvent(item:any) {
    let filter = this.countries.filter((a) => a.name === item.name);
    this.router.navigateByUrl("/patients/doctor-profile?id=" + filter[0].id);
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    // do something
  }

  //// next step 2
  sliderContent = [
    {
      solu_img: "assets/img/solution1.png",
      speciality_img: "assets/img/specialities/specialities-01.png",
      speciality: "SURGERY",
      speciality_title: "Heart Surgery",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
    {
      solu_img: "assets/img/solution2.png",
      speciality_img: "assets/img/specialities/specialities-02.png",
      speciality: "SAVING LIVES",
      speciality_title: "Valve Diseases",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
    {
      solu_img: "assets/img/solution3.png",
      speciality_img: "assets/img/specialities/specialities-03.png",
      speciality: "GREAT CARE",
      speciality_title: "Children’s services",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
    {
      solu_img: "assets/img/solution1.png",
      speciality_img: "assets/img/specialities/specialities-01.png",
      speciality: "SURGERY",
      speciality_title: "Heart Surgery",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
    {
      solu_img: "assets/img/solution2.png",
      speciality_img: "assets/img/specialities/specialities-02.png",
      speciality: "SAVING LIVES",
      speciality_title: "Heart Surgery",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
    {
      solu_img: "assets/img/solution3.png",
      speciality_img: "assets/img/specialities/specialities-03.png",
      speciality: "GREAT CARE",
      speciality_title: "Children’s services",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
    {
      solu_img: "assets/img/solution1.png",
      speciality_img: "assets/img/specialities/specialities-01.png",
      speciality: "SURGERY",
      speciality_title: "Heart Surgery",
      speciality_desc:
        "Lorem Ipsum is simply dummy text  the printing and typesetting industry.",
    },
  ];

  nextslide() {
    this.slickModal2.slickNext();
  }

  prevslide() {
    this.slickModal2.slickPrev();
  }

  nextpage() {
    this.slickModal3.slickNext();
  }

  prevpage() {
    this.slickModal3.slickPrev();
  }

  navigateToBlogGridSearchResult(key: string) {
    // alert(key);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/blog-grid?filterTerm=' + key);
    });
  }

  // Set this service item as the first item in services array
  sendServiceItemToTop(service: any) {
    // let firstItem = this.services.shift();
    //
    // const fromIndex = this.services.indexOf(service)
    // const element = this.services.splice(fromIndex,1, firstItem)[0];
    //
    // // this.services.
    // // Array.splice(position,0,new_element_1,new_element_2,...);
    // this.services.unshift(element);
  }
}
