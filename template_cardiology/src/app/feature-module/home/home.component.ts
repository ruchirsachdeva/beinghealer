import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CommonService } from 'src/app/core/service/service.index';
declare const $: any;

export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild('slickModal1') slickModal1!: SlickCarouselComponent;
  @ViewChild('slickModal2') slickModal2!: SlickCarouselComponent;
  @ViewChild('slickModal3') slickModal3!: SlickCarouselComponent;
  specialityList: any = [];
  doctors: any = [];
  slidepage: any;
  employeeCtrl = new FormControl();
  filteredEmployee: Observable<Doctors[]>;
  blogs: any = [];
  keyword = 'name';
  searchDoctor = [];
  public countries = [
    {
      id: 1,
      name: 'Albania',
      img: 'image',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    },
  ];
  constructor(public router: Router, public commonService: CommonService) {
    this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
      startWith(''),
      map((employee) =>
        employee ? this._filterEmployees(employee) : this.doctors.slice()
      )
    );
  }

  ngOnInit() {
    localStorage.clear()
    this.commonService.nextmessage('main');
    window.scrollTo(0, 0);
    this.getspeciality();
    this.getDoctors();
    this.getblogs();

    // User's voice slider
    $('.testi-slider').each(() => {
      var $show = $(this).data('show');
      var $arr = $(this).data('arrow');
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
  private _filterEmployees(value: string): Doctors[] {
    const filterValue = value.toLowerCase();
    return this.doctors.filter(
      (state: any) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  slides = [
    {
      patient_img: 'assets/img/patients/patient.jpg',
      patient_name: 'Ami Smith',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
    {
      patient_img: 'assets/img/patients/patient1.jpg',
      patient_name: 'Brian Burcham',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
    {
      patient_img: 'assets/img/patients/patient2.jpg',
      patient_name: 'James Smith',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
    {
      patient_img: 'assets/img/patients/patient3.jpg',
      patient_name: 'Ana Proctor',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
    {
      patient_img: 'assets/img/patients/patient4.jpg',
      patient_name: 'Joseph Butler',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
    {
      patient_img: 'assets/img/patients/patient5.jpg',
      patient_name: 'Anna Norton',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
    {
      patient_img: 'assets/img/patients/patient6.jpg',
      patient_name: 'Bryce Cotten',
      patient_issue: 'Heart Implant',
      blogquote: 'assets/img/blockquotes.png',
      msg: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem',
    },
  ];

  slideConfig = {
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
    dots: true,
    autoplay: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      this.doctors.forEach((index: any, i: any) => {
        this.countries.push({
          id: index.id,
          name: index.doctor_name,
        });
      });
    });
  }

  getblogs() {
    this.commonService.getBlogs().subscribe((res) => {
      this.blogs = res;
    });
  }

  selectEvent(item: any) {
    let filter = this.countries.filter((a) => a.name === item.name);
    this.router.navigateByUrl('/patients/doctor-profile?id=' + filter[0].id);
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }

  //// next step 2
  sliderContent = [
    {
      solu_img: 'assets/img/solution1.png',
      speciality_img: 'assets/img/specialities/specialities-01.png',
      speciality: 'SURGERY',
      speciality_title: 'Heart Surgery',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
    {
      solu_img: 'assets/img/solution2.png',
      speciality_img: 'assets/img/specialities/specialities-02.png',
      speciality: 'SAVING LIVES',
      speciality_title: 'Valve Diseases',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
    {
      solu_img: 'assets/img/solution3.png',
      speciality_img: 'assets/img/specialities/specialities-03.png',
      speciality: 'GREAT CARE',
      speciality_title: 'Children’s services',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
    {
      solu_img: 'assets/img/solution1.png',
      speciality_img: 'assets/img/specialities/specialities-01.png',
      speciality: 'SURGERY',
      speciality_title: 'Heart Surgery',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
    {
      solu_img: 'assets/img/solution2.png',
      speciality_img: 'assets/img/specialities/specialities-02.png',
      speciality: 'SAVING LIVES',
      speciality_title: 'Heart Surgery',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
    {
      solu_img: 'assets/img/solution3.png',
      speciality_img: 'assets/img/specialities/specialities-03.png',
      speciality: 'GREAT CARE',
      speciality_title: 'Children’s services',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
    {
      solu_img: 'assets/img/solution1.png',
      speciality_img: 'assets/img/specialities/specialities-01.png',
      speciality: 'SURGERY',
      speciality_title: 'Heart Surgery',
      speciality_desc:
        'Lorem Ipsum is simply dummy text  the printing and typesetting industry.',
    },
  ];
  solutionSliderConfig = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
}
