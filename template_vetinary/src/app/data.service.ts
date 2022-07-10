import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  specialityList =  [
     {  id: 1,key:  "#SP001", speciality : 'Veterinary Microbiology',img : "assets/img/specialities/specialities-01.png" },
     {  id: 2,key:  "#SP002", speciality : 'Animal Genetics and Breeding',img : "assets/img/specialities/specialities-02.png" },
     {  id: 3,key:  "#SP003", speciality : 'Veterinarian', img : "assets/img/specialities/specialities-03.png" },
     {  id: 4,key:  "#SP004", speciality : 'Veterinary Microbiology',img : "assets/img/specialities/specialities-04.png" },
     {  id: 5,key:  "#SP005", speciality : 'Veterinary Pathology',img:"assets/img/specialities/specialities-05.png" },
     
    ];

    let appointments = [
      {  id: 1,doctorName : "Dr. Ruby Perrin",type:"New Patient",speciality:"Dental",patient_key:"#PT0016",Patient_Name:"George Anderson",appointment_time:"Wed Nov 11 2020 10:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$150",img : "assets/img/patients/patient.jpg",name: "Carter Guess",key: "#PT0016" },
      {  id: 2,doctorName : "Dr. Darren Eldder",type:"Old Patient",speciality:"Dental",patient_key:"#PT0001",Patient_Name:"Megan Bird",appointment_time:"Wed Nov 03 2020 11:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$200",img : "assets/img/patients/patient1.jpg",name: "Rochel Dickey",key: "#PT0001" },
      {  id: 3,doctorName : "Dr. Deborah Angel",type:"New Patient",speciality:"Cardiology",patient_key:"#PT0002",Patient_Name:"Alvin Boykin",appointment_time:"Wed Nov 01 2020 01:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$75",img : "assets/img/patients/patient2.jpg",name: "Arlow Ebert",key: "#PT0002" },
      {  id: 4,doctorName : "Dr. Sofia Brient",type:"Old Patient",speciality:"Urology",patient_key:"#PT0003",Patient_Name:"Nicholas Hicks",appointment_time:"Wed Oct 30 2020 09:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$100",img : "assets/img/patients/patient3.jpg",name: "Niv Collazo",key: "#PT0003" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"New Patient",speciality:"Urology",patient_key:"#PT0004",Patient_Name:"Sherri McCarthy",appointment_time:"Wed Oct 28 2020 06:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$350",img : "assets/img/patients/patient4.jpg",name: "Flo Sherrod",key: "#PT0004" },
      {  id: 6,doctorName : "Dr. Marvin Campbell",type:"Old Patient",speciality:"Urology",patient_key:"#PT0005",Patient_Name:"Roger Loyd",appointment_time:"Wed Oct 27 2020 08:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$250",img : "assets/img/patients/patient5.jpg",name: "Korva Weiner",key: "#PT0005" }
    ]

    let favourites = [
      {
        id : 1,
        doctor_name : "Dr. Patricia Cleveland",
        speciality : "Dentist",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MVSc Veterinary Pathology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3100.00",
        Price : "$300-$1000",
        profile : "assets/img/doctors/doctor-01.jpg",
        status : "1",
        type : "Female",
        location : "Florida, USA",
        availableTime : "10 am",
        consulting_fees : "$100",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 2,
        doctor_name : "Dr. Molly Verville",
        speciality : "Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "Bachelor of Veterinary Science",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3900.00",
        Price : "$50-$300",
        profile : "assets/img/doctors/doctor-02.jpg",
        status : "1",
        type : "Female",
        location : "Newyork, USA",
        availableTime : "8 am",
        consulting_fees : "$90",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 3,
        doctor_name : "Dr. Christine Walton",
        speciality : "Cardiology",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MVSc Veterinary Pathology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3700.00",
        Price : "$100-$400",
        profile : "assets/img/doctors/doctor-03.jpg",
        status : "1",
        type : "Female",
        location : "Georgia, USA",
        availableTime : "2 pm",
        consulting_fees : "$70",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 4,
        doctor_name : "Dr. Wendy Robbins",
        speciality : "BDS, MDS - Oral & Maxillofacial Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "BVSc, MVSc Veterinary Pathology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3000.00",
        Price : "$150-$250",
        profile : "assets/img/doctors/doctor-04.jpg",
        status : "1",
        type : "Female",
        location : "Louisiana, USA",
        availableTime : "11 am",
        consulting_fees : "$110",
        booking_fees : "$10",
        video_call : "$50"
    },
    {
      id : 5,
      doctor_name : "Dr. Marvin Campbell",
      speciality : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "BVSc, MVSc Veterinary Pathology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3150.00",
      Price : "$50-$700",
      profile : "assets/img/doctors/doctor-05.jpg",
      status : "1",
      type : "Male",
      location : "Michigan, USA",
      availableTime : "12 pm",
      consulting_fees : "$80",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 6,
      doctor_name : "Dr. Dale Ortiz",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MVSc Veterinary Pathology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$100-$500",
      profile : "assets/img/doctors/doctor-06.jpg",
      status : "1",
      type : "Female",
      location : "Texas, USA",
      availableTime : "7 am",
      consulting_fees : "$170",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 7,
      doctor_name : "Dr. Linda Tobin",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MVSc Veterinary Surgery & Radiology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$100-$1000",
      profile : "assets/img/doctors/doctor-07.jpg",
      status : "1",
      type : "Female",
      location : "Kansas, USA",
      availableTime : "10 pm",
      consulting_fees : "$130",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 8,
      doctor_name : "Dr. Paul Richard",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "BVSc,MVSc Veterinary Pathology",
      Available : "Available on Fri, 22 Mar",
      Earned : "3200.00",
      Price : "$100-$400",
      profile : "assets/img/doctors/doctor-08.jpg",
      status : "1",
      type : "Female",
      location : "California, USA",
      availableTime : "9 am",
      consulting_fees : "$90",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 9,
      doctor_name : "Dr. John Gibbs",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MVSc Veterinary Pathology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$500-$2500",
      profile : "assets/img/doctors/doctor-09.jpg",
      status : "1",
      type : "Male",
      location : "Oklahoma, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 10,
      doctor_name : "Dr. Linda Sullivan",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MVSc Veterinary Pathology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$75-$250",
      profile : "assets/img/doctors/doctor-10.jpg",
      status : "1",
      type : "Male",
      location : "Montana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 11,
      doctor_name : "Dr. Julia Washington",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "BVSc, MVSc Veterinary Pathology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$275-$450",
      profile : "assets/img/doctors/doctor-11.jpg",
      status : "1",
      type : "Male",
      location : "Oklahoma, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 12,
      doctor_name : "Dr. Shaun Aponte",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MVSc Veterinary Pathology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150-$350",
      profile : "assets/img/doctors/doctor-12.jpg",
      status : "1",
      type : "Male",
      location : "Indiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
  ]

    let doctors = [
                {
            id : 1,
            doctor_name : "Dr. Patricia Cleveland",
            speciality : "Veterinary Pathology",
            speciality_profile : 'assets/img/specialities/specialities-03.png',
            since : "Wed Jan 4 2018 09:41:48 GMT+0530 (India Standard Time)",
            Education : "MVSc Veterinary Pathology",
            Available : " Available on Fri, 22 Mar ",
            Earned : "3300.00",
            Price : "$300 - $1000",
            profile : "assets/img/doctors/doctor-thumb-01.jpg",
            status : "1",
            type : "Female",
            location : "Florida, USA",
            availableTime : "10 am",
            consulting_fees : "$100",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 2,
            doctor_name : "Dr. Molly Verville",
            speciality : "Veterinary Pathology",
            speciality_profile : "assets/img/specialities/specialities-03.png",
            since : "Wed Mar 23 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "4000.00",
            Education : "Bachelor of Veterinary Science",
            Available : " Available on Fri, 22 Mar ",
            Price : " $50 - $300 ",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-02.jpg",
            type : "Female",
            location : "Newyork, USA",
            availableTime : "10 am",
            consulting_fees : "$100",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 3,
            doctor_name : "Dr. Christine Walton",
            speciality : "Veterinary Microbiology",
            speciality_profile : 'assets/img/specialities/specialities-02.png',
            since : "Wed Apr 21 2018 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "4100.00",
            Education : "MVSc Veterinary Pathology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$100-$400",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-03.jpg",
            type : "Male",
            location : "Newyork, USA",
            availableTime : "3 pm",
            consulting_fees : "$150",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 4,
            doctor_name : "Dr. Wendy Robbins",
            speciality : "Animal Genetics and Breeding",
            speciality_profile : "assets/img/specialities/specialities-01.png",
            since : "Wed Feb 15 2018 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3500.00",
            Education : "BVSc, MVSc Veterinary Pathology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$150-$250",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-04.jpg",
            type : "Male",
            location : "Newyork, USA",
            availableTime : "12 am",
            consulting_fees : "$250",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:5,
            doctor_name : "Dr. Dale Ortiz",
            speciality : "Veterinary Pathology",
            speciality_profile : "assets/img/specialities/specialities-03.png",
            since : "Wed Dec 14 2018 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "2000.00",
            Education : "MVSc Veterinary Pathology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$100-$500",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-06.jpg",
            type : "Male",
            location : "Texas, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        }
    ]
 
    let patients = [
      {
            id : "1",
            key : "#PT001",
            name : "Lula Dillard",
            age : "38",
            address : "Newyork, United States",
            phone : "+1 923 782 4575",
            email : "richard@example.com",
            lastvisit : " Wed Nov 14 2020 10:00:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "AB+",
            type : "Male",
            img : "assets/img/patients/patient.jpg"
        },
      {
            id : "2",
            key : "#PT002",
            name : "Stephanie Wolfe",
            age : "23",
            address : "North Carolina, United States",
            phone : "+1 828 632 9170",
            email : "charlenereed@example.com",
            lastvisit : " Wed Nov 12 2020 05:00:48 GMT+0530 (India Standard Time)",
            paid : "200.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient1.jpg"
        },
        {
            id : "3",
            key : "#PT003",
            name : "Gina Gallegos",
            age : "29",
            address : "Maine, United States",
            phone : "+1 207 729 9974",
            email : "travistrimble@example.com",
            lastvisit : " Wed Nov 11 2020 08:00:48 GMT+0530 (India Standard Time)",
            paid : "250.00",
            bloodgroup : "B+",
            type : "Male",
            img : "assets/img/patients/patient2.jpg"
        },
        {
            id : "4",
            key : "#PT004",
            name : "Mitzi Cooper",
            age : "32",
            address : "Newyork, United States",
            phone : "+1 260 724 7769",
            email : "carlkelly@example.com",
            lastvisit : " Wed Nov 9 2020 09:00:48 GMT+0530 (India Standard Time)",
            paid : "150.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient3.jpg"
        },
        {
            id : "5",
            key : "#PT005",
            name : "Richard Ross",
            age : "23",
            address : "Indiana, United States",
            phone : "+1 504 368 6874",
            email : "michellefairfax@example.com",
            lastvisit : " Wed Nov 9 2020 06:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "B+",
            type : "Female",
            img : "assets/img/patients/patient4.jpg"
        },
        {
             id : "6",
            key : "#PT006",
            name : "Norman Lynn",
            age : "16",
            address : "Florida, United States",
            phone : "+1 954 820 7887",
            email : "ginamoore@example.com",
            lastvisit : " Wed Nov 8 2020 09:00:48 GMT+0530 (India Standard Time)",
            paid : "300.00",
            bloodgroup : "AB-",
            type : "Male",
            img : "assets/img/patients/patient5.jpg"
        },
         {
             id : "7",
            key : "#PT007",
            name : "Elsie Gilley",
            age : "25",
            address : "Kentucky, United States",
            phone : "+1 315 384 4562",
            email : "elsiegilley@example.com",
            lastvisit : " Wed Nov 6 2020 07:00:48 GMT+0530 (India Standard Time)",
            paid : "250.00",
            bloodgroup : "O-",
            type : "Female",
            img : "assets/img/patients/patient6.jpg"
        },
        {
             id : "8",
            key : "#PT008",
            name : "Pamela Knoll",
            age : "21",
            address : "California, United States",
            phone : "+1 707 2202 603",
            email : "joangardner@example.com",
            lastvisit : " Wed Nov 5 2020 12:00:48 GMT+0530 (India Standard Time)",
            paid : "150.00",
            bloodgroup : "A-",
            type : "Female",
            img : "assets/img/patients/patient7.jpg"
        },
        {
             id : "9",
            key : "#PT009",
            name : "Tara Jones",
            age : "18",
            address : "New Jersey, United States",
            phone : "+1 973 773 9497",
            email : "danielgriffing@example.com",
            lastvisit : " Wed Nov 5 2020 07:00:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient8.jpg"
        },
        {
             id : "10",
            key : "#PT010",
            name : "Kevin Kelly",
            age : "19",
            address : "Florida, United States",
            phone : "+1 850 358 4445",
            email : "walterroberson@example.com",
            lastvisit : " Wed Nov 4 2020 10:00:48 GMT+0530 (India Standard Time)",
            paid : "120.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient9.jpg"
        },
        {
             id : "11",
            key : "#PT0010",
            name : "Joseph Lares",
            age : "19",
            address : "California, USA",
            phone : "+1 858 259 5285",
            email : "robertrhodes@example.com",
            lastvisit : " Wed Nov 4 2020 09:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "B+",
            type : "Female",
            img : "assets/img/patients/patient10.jpg"
        }   ,
        {
             id : "12",
            key : "#PT0011",
            name : "Linda Sullivan",
            age : "9",
            address : "Colorado, United States",
            phone : "+1 303 607 7075",
            email : "harrywilliams@example.com",
            lastvisit : " Wed Nov 3 2020 06:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A-",
            type : "Male",
            img : "assets/img/patients/patient11.jpg"
        }        
    ]

    let reviews = [
      {
         id : 1,
         patient_name : "Richard Boss",
         doctor_name : "Dr. Wendy Robbins",
         patient_pic : "assets/img/patients/patient4.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 2,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Dale Ortiz",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-06.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Aug 22 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 3,
         patient_name : "Gina Gallegos",
         doctor_name : "Dr. Molly Verville",
         patient_pic : "assets/img/patients/patient2.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Nov 2 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 4,
         patient_name : "Kevin Kelly",
         doctor_name : "Dr. John Gibbs",
         patient_pic : "assets/img/patients/patient9.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-09.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Mar 11 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 5,
         patient_name : "Linda sullivan",
         doctor_name : "Dr. Linda Sullivan",
         patient_pic : "assets/img/patients/patient10.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Feb 15 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 6,
         patient_name : "Mitzi Cooper",
         doctor_name : "Dr. Christine Walton",
         patient_pic : "assets/img/patients/patient3.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Nov 1 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 7,
         patient_name : "Norman Lynn",
         doctor_name : "Dr. MArvin Campbell",
         patient_pic : "assets/img/patients/patient5.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Sep 24 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 8,
         patient_name : "Pamela Knoll",
         doctor_name : "Dr. Linda Tobin",
         patient_pic : "assets/img/patients/patient7.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Jul 21 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 9,
         patient_name : "Stephanie Wolfe",
         doctor_name : "Dr. Patricia Cleveland",
         patient_pic : "assets/img/patients/patient1.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Nov 03 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 10,
         patient_name : "Tara Jones",
         doctor_name : "Dr. Paul Richard",
         patient_pic : "assets/img/patients/patient8.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed Jun 16 2020 09:41:48 GMT+0530 (India Standard Time)"
      }
  ]

  let comments = [

    {
      "name" : "Michelle Fairfax",
      "email" : "Fairfax@example.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "name" : "Elsie Gilley",
      "email" : "Fairfax@example.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }

  ]

  let blogs = [
  {
    id : 1,
    title : "Doccure – Making your clinic painless visit?",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed Dec 4 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-01.jpg",
    doctor_name : "Dr. Patricia Cleveland",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"

  },
  {
    id : 2,
    title : "What are the benefits of Online Doctor Booking?",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed Dec 3 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-02.jpg",
    doctor_name : "Dr. Molly Verville",
    doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    id : 3,
    title : "Benefits of consulting with an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed Dec 3 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-03.jpg",
    doctor_name : "Dr. Christine Walton",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
  {
    id : 4,
    title : "5 Great reasons to use an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Dec 2 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-04.jpg",
    doctor_name : "Dr. Wendy Robbins",
    doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg"
  },
  {
    id : 5,
    title : "Online Doctor Appointment Scheduling",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Dec 1 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-05.jpg",
    doctor_name : "Dr. Marvin Campbell",
    doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg"
  },
  {
    id : 6,
    title : "Simple steps to make your doctor visits exceptional!",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-06.jpg",
    doctor_name : "Dr. Dale Ortiz",
    doctor_pic : "assets/img/doctors/doctor-thumb-06.jpg"
  },
  {
    id : 7,
    title : "Choose your own Online Doctor Appointment",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-07.jpg",
    doctor_name : "Dr. Linda Tobin",
    doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg"
  },
  {
    id : 8,
    title : "Simple steps to visit your doctor today",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-08.jpg",
    doctor_name : "Dr. Paul Richard ",
    doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg"
  },
   {
    id : 9,
    title : "5 Great reasons to use an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-09.jpg",
    doctor_name : "Dr. John Gibbs ",
    doctor_pic : "assets/img/doctors/doctor-thumb-09.jpg"
  },
   {
    id : 10,
    title : "Online Doctoral Programs",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-10.jpg",
    doctor_name : "Dr. Linda Sullivan",
    doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg"
  }
] 

  let transactions = [
      {
        id : 1,
        invoiceNumber  : '#IN0001',
        patient_id : '#PT001',
        patient_name : 'Stephanie Wolfe',
        profile : 'assets/img/patients/patient1.jpg',
        total_amount : '$450',
        created_date : '9 Sep 2020',
        date: "Wed Nov 14 2020 09:41:48 GMT+0530 (India Standard Time)",
        status : 'paid'
      },
      {
        id : 2,
          invoiceNumber  : '#IN0002',
          patient_id : '#PT002',
          patient_name : 'Gina Gallegos',
          profile : 'assets/img/patients/patient2.jpg',
          total_amount : '$200',
          created_date : '29 Oct 2020',
          date: "Wed Nov 13 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 3,
          invoiceNumber  : '#IN0003',
          patient_id : '#PT003',
          patient_name : 'Mitzi Cooper',
          profile : 'assets/img/patients/patient3.jpg',
          total_amount : '$100',
          created_date : '25 Sep 2020',
          date: "Wed Nov 12 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 4,
          invoiceNumber  : '#IN0004',
          patient_id : '#PT004',
          patient_name : 'Richard Ross',
          profile : 'assets/img/patients/patient4.jpg',
          total_amount : '$350',
           created_date : '9 Oct 2020',
          date: "Wed Nov 11 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 5,
          invoiceNumber  : '#IN0005',
          patient_id : '#PT005',
          patient_name : 'Norman Lynn',
          profile : 'assets/img/patients/patient5.jpg',
          total_amount : '$275',
          created_date : '19 Nov 2020',
          date: "Wed Nov 10 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 6,
          invoiceNumber  : '#IN0006',
          patient_id : '#PT006',
          patient_name : 'Elsie Gilley',
          profile : 'assets/img/patients/patient6.jpg',
          total_amount : '$600',
          created_date : '12 Oct 2020',
          date: "Wed Nov 9 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 7,
          invoiceNumber  : '#IN0007',
          patient_id : '#PT007',
          patient_name : 'Pamela Knoll',
          profile : 'assets/img/patients/patient7.jpg',
          total_amount : '$50',
          created_date : '25 Oct 2020',
          date: "Wed Nov 8 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 8,
          invoiceNumber  : '#IN0008',
          patient_id : '#PT008',
          patient_name : 'Tara Jones',
          profile : 'assets/img/patients/patient8.jpg',
          total_amount : '$400',
          created_date : '30 Oct 2020',
          date: "Wed Nov 7 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 9,
          invoiceNumber  : '#IN0009',
          patient_id : '#PT009',
          patient_name : 'Kevin Kelly',
          profile : 'assets/img/patients/patient9.jpg',
          total_amount : '$550',
          created_date : '5 Nov 2020',
          date: "Wed Nov 6 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 10,
          invoiceNumber  : '#IN0010',
          patient_id : '#PT0010',
          patient_name : 'Joseph Lares',
          profile : 'assets/img/patients/patient10.jpg',
          total_amount : '$100',
          created_date : '7 Nov 2020',
          date: "Wed Nov 5 2020 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      }
  ]
    return {transactions:transactions,comments:comments,favourites:favourites,blogs:blogs,specialityList:specialityList,appointments:appointments,doctors:doctors,patients:patients,reviews:reviews};
 
   }
}
