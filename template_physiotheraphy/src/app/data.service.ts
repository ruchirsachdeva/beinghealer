import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  specialityList =  [
     {  id: 1,key:  "#SP001", speciality : 'Electrotheraphy',img : "assets/img/specialities/specialities-01.png" },
     {  id: 2,key:  "#SP002", speciality : 'Accupuncture',img : "assets/img/specialities/specialities-03.png" },
     {  id: 3,key:  "#SP003", speciality : 'Phsiotherapist', img : "assets/img/specialities/specialities-02.png" },
     {  id: 4,key:  "#SP004", speciality : 'Hydrotheraphy',img : "assets/img/specialities/specialities-04.png" },
     {  id: 5,key:  "#SP005", speciality : 'Orthopaedics',img:"assets/img/specialities/specialities-05.png" },
     
    ];

    let appointments = [
      {  id: 1,doctorName : "Dr. Ruby Perrin",type:"New patient",speciality:"Dental",patient_key:"#PT0016",Patient_Name:"George Anderson",appointment_time:"Wed Nov 11 2020 10:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$150.00" },
      {  id: 2,doctorName : "Dr. Darren Eldder",type:"Old patient",speciality:"Dental",patient_key:"#PT0001",Patient_Name:"Megan Bird",appointment_time:"Wed Nov 03 2020 11:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$200.00" },
      {  id: 3,doctorName : "Dr. Deborah Angel",type:"New patient",speciality:"Cardiology",patient_key:"#PT0002",Patient_Name:"Alvin Boykin",appointment_time:"Wed Nov 1 2020 01:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$75.00" },
      {  id: 4,doctorName : "Dr. Sofia Brient",type:"Old patient",speciality:"Urology",patient_key:"#PT0003",Patient_Name:"Nicholas Hicks",appointment_time:"Wed Oct 30 2020 09:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$100.00" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"New patient",speciality:"Urology",patient_key:"#PT0004",Patient_Name:"Sherri McCarthy",appointment_time:"Wed Oct 28 2020 06:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$350.00" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"Old patient",speciality:"Urology",patient_key:"#PT0005",Patient_Name:"Roger Loyd",appointment_time:"Wed Oct 27 2020 08:00:48 GMT+0530 (India Standard Time)",status : "active",amount:"$250.00" }
    ]

    let favourites = [
      {
        id : 1,
        doctor_name : "Dr. Tonica Jackson",
        speciality : "Dentist",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MDS - Periodontology and Oral Implantology, BDS",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3100.00",
        Price : "$360-$1000",
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
        doctor_name : "Dr. Oscar Dill",
        speciality : "Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "BDS, MDS - Oral & Maxillofacial Surgery",
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
        doctor_name : "Dr. Loverna Bartley",
        speciality : "Cardiology",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MBBS, MD - General Medicine, DNB - Cardiology",
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
        doctor_name : "Dr. Marivelle Seal",
        speciality : "BDS, MDS - Oral & Maxillofacial Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MBBS, MS - General Surgery, MCh - Electrotheraphy",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3000.00",
        Price : "$150-$250",
        profile : "assets/img/doctors/doctor-04.jpg",
        status : "1",
        type : "Female",
        location : "Louisiana ], USA",
        availableTime : "11 am",
        consulting_fees : "$110",
        booking_fees : "$10",
        video_call : "$50"
    },
    {
      id : 5,
      doctor_name : "Dr. Bree Gann",
      speciality : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
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
      doctor_name : "Dr. Harmoni Baylor",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
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
      doctor_name : "Dr. Kamberly Davidsor",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Accupuncture",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$100-$10000",
      profile : "assets/img/doctors/doctor-07.jpg",
      status : "1",
      type : "Female",
      location : "Texas, USA",
      availableTime : "10 pm",
      consulting_fees : "$130",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 8,
      doctor_name : "Dr. Nacham Spears",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Dermatology,Venereology & Lepros",
      Available : " Available on Fri, 22 Mar ",
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
      doctor_name : "Dr. Olumiji Haggard",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS - Periodontology and Oral Implantology,BDS",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$500-$2500",
      profile : "assets/img/doctors/doctor-09.jpg",
      status : "1",
      type : "Male",
      location : "Louisiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 10,
      doctor_name : "Dr. Tina Burroughs",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS- Periodontology and Oral Implantology,BDS",
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
      doctor_name : "Dr. Meena Luciano",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Endocrinology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$275-$450",
      profile : "assets/img/doctors/doctor-11.jpg",
      status : "1",
      type : "Male",
      location : "Okahoma, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 12,
      doctor_name : "Dr. Dicky Barham",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150",
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
            doctor_name : "Dr. Tonina Jackson",
            speciality : "Physiotherapist",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Education : "MDS - Periodontology and Oral Implantology, BDS",
            Available : " Available on Fri, 22 Mar ",
            Earned : "3100.00",
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
            doctor_name : "Dr. Oscar Dill",
            speciality : "Physiotherapist",
            speciality_profile : "assets/img/specialities/specialities-04.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "5000.00",
            Education : "BDS, MDS - Oral & Maxillofacial Surgery",
            Available : " Available on Fri, 22 Mar ",
            Price : "$50 - $300",
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
            doctor_name : "Dr. Loverna Bartley",
            speciality : "Cardiology",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3300.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$100 - $400",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-03.jpg",
            type : "Male",
            location : "Georgia, USA",
            availableTime : "3 pm",
            consulting_fees : "$150",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 4,
            doctor_name : "Dr. Marivelle Seal",
            speciality : "Electrotherapy",
            speciality_profile : "assets/img/specialities/specialities-03.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3500.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$150 - $250",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-04.jpg",
            type : "Male",
            location : "Louisiana, USA",
            availableTime : "12 am",
            consulting_fees : "$250",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:5,
            doctor_name : "Dr. Harmoni Baylor",
            speciality : "Orthopaedics",
            speciality_profile : "assets/img/specialities/specialities-02.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$100 - $500",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-05.jpg",
            type : "Male",
            location : " Texas, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        }
        // {
        //     id:6,
        //     doctor_name : "Dr. Marvin Campbell",
        //     speciality : "Orthopaedics",
        //     speciality_profile : "assets/img/specialities/specialities-03.png",
        //     since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        //     Earned : "3700.00",
        //     Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        //     Available : " Available on Fri, 22 Mar ",
        //     Price : "$260",
        //     status : "1",
        //     profile : "assets/img/doctors/doctor-thumb-05.jpg",
        //     type : "Male",
        //     location : "Florida, USA",
        //     availableTime : "11 am",
        //     consulting_fees : "$200",
        //     booking_fees : "$10",
        //     video_call : "$50"
        // },
        // {
        //     id:7,
        //     doctor_name : "Dr. Olga Barlow",
        //     speciality : "Dental",
        //     speciality_profile : 'assets/img/specialities/specialities-05.png',
        //     since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        //     Earned : "3700.00",
        //     Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        //     Available : " Available on Fri, 22 Mar ",
        //     Price : "$260",
        //     status : "1",
        //     profile : "assets/img/doctors/doctor-thumb-10.jpg",
        //     type : "Male",
        //     location : "Florida, USA",
        //     availableTime : "11 am",
        //     consulting_fees : "$200",
        //     booking_fees : "$10",
        //     video_call : "$50"
        // },
        //  {
        //     id:8,
        //     doctor_name : "Dr. Paul Richard",
        //     speciality : "Neurology",
        //     speciality_profile : "assets/img/specialities/specialities-02.png",
        //     since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        //     Earned : "3700.00",
        //     Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        //     Available : " Available on Fri, 22 Mar ",
        //     Price : "$260",
        //     status : "1",
        //     profile : "assets/img/doctors/doctor-thumb-08.jpg",
        //     type : "Male",
        //     location : "Florida, USA",
        //     availableTime : "11 am",
        //     consulting_fees : "$200",
        //     booking_fees : "$10",
        //     video_call : "$50"
        // },
        // {
        //     id:9,
        //     doctor_name : "Dr. Ruby Perrin",
        //     speciality : "Dental",
        //     speciality_profile : 'assets/img/specialities/specialities-05.png',
        //     since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        //     Earned : "3700.00",
        //     Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        //     Available : " Available on Fri, 22 Mar ",
        //     Price : "$260",
        //     status : "1",
        //     profile : "assets/img/doctors/doctor-thumb-01.jpg",
        //     type : "Male",
        //     location : "Florida, USA",
        //     availableTime : "11 am",
        //     consulting_fees : "$200",
        //     booking_fees : "$10",
        //     video_call : "$50"
        // },
        // {
        //     id:9,
        //     doctor_name : "Dr. Sofia Brient",
        //     speciality : " Urology",
        //     speciality_profile : "assets/img/specialities/specialities-01.png",
        //     since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        //     Earned : "3700.00",
        //     Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        //     Available : " Available on Fri, 22 Mar ",
        //     Price : "$260",
        //     status : "1",
        //     profile : "assets/img/doctors/doctor-thumb-04.jpg",
        //     type : "Male",
        //     location : "Florida, USA",
        //     availableTime : "11 am",
        //     consulting_fees : "$200",
        //     booking_fees : "$10",
        //     video_call : "$50"
        // }
    ]
 
    let patients = [
      {
            id : "1",
            key : "#PT0016",
            name : "Avrill Gabriel",
            age : "38",
            address : "Newyork, United States",
            phone : "+1 923 782 4575",
            email : "richard@example.com",
            lastvisit : "Wed Nov 14 2019 10:00:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "AB+",
            type : "Male",
            img : "assets/img/patients/patient.jpg"
        },
      {
            id : "2",
            key : "#PT0001",
            name : "Panola Brink",
            age : "29",
            address : "North Carolina, United States",
            phone : "+1 828 632 9170",
            email : "charlenereed@example.com",
            lastvisit : "Wed Nov 12 2019 05:00:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient1.jpg"
        },
        {
            id : "3",
            key : "#PT0002",
            name : "Denney Rhea",
            age : "23",
            address : "Maine, United States",
            phone : "+1 207 729 9974",
            email : "travistrimble@example.com",
            lastvisit : "Wed Nov 11 2019 08:00:48 GMT+0530 (India Standard Time)",
            paid : "250.00",
            bloodgroup : "B+",
            type : "Male",
            img : "assets/img/patients/patient2.jpg"
        },
        {
            id : "4",
            key : "#PT0003",
            name : "Carl Kelly",
            age : "32",
            address : "Newyork, United States",
            phone : "+1 260 724 7769",
            email : "carlkelly@example.com",
            lastvisit : "Wed Nov 9 2019 09:00:48 GMT+0530 (India Standard Time)",
            paid : "200.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient3.jpg"
        },
        {
            id : "5",
            key : "#PT0004",
            name : "Teddie Page",
            age : "25",
            address : "Indiana, United States",
            phone : "+1 504 368 6874",
            email : "michellefairfax@example.com",
            lastvisit : "Wed Nov 9 2019 06:00:48 GMT+0530 (India Standard Time)",
            paid : "150.00",
            bloodgroup : "B+",
            type : "Female",
            img : "assets/img/patients/patient4.jpg"
        },
        {
             id : "6",
            key : "#PT0005",
            name : "Rebbie Moseley",
            age : "25",
            address : "Florida, United States",
            phone : "+1 954 820 7887",
            email : "ginamoore@example.com",
            lastvisit : "Wed Nov 8 2019 09:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "AB-",
            type : "Male",
            img : "assets/img/patients/patient5.jpg"
        },
         {
             id : "7",
            key : "#PT0006",
            name : "Shulamith Blaine",
            age : "14",
            address : "Kentucky, United States",
            phone : "+1 315 384 4562",
            email : "elsiegilley@example.com",
            lastvisit : "Wed Nov 6 2019 07:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "O-",
            type : "Female",
            img : "assets/img/patients/patient6.jpg"
        },
        {
             id : "8",
            key : "#PT007",
            name : "Atalante Quezada",
            age : "25",
            address : "California, United States",
            phone : "+1 707 2202 603",
            email : "joangardner@example.com",
            lastvisit : "Wed Nov 5 2019 12:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A-",
            type : "Female",
            img : "assets/img/patients/patient7.jpg"
        },
        {
             id : "9",
            key : "#PT008",
            name : "Zachaios Valencia",
            age : "28",
            address : "New Jersey, United States",
            phone : "9548207887",
            email : "danielgriffing@example.com",
            lastvisit : "Wed Nov 5 2019 07:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient8.jpg"
        },
        {
             id : "10",
            key : "#PT0009",
            name : "Bratislav Chamberlain",
            age : "28",
            address : "Florida, United States",
            phone : "+1 850 358 4445",
            email : "Elsie@example.com",
            lastvisit : "Wed Nov 4 2019 10:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient9.jpg"
        },
        {
             id : "11",
            key : "#PT0010",
            name : "Hamal Parry",
            age : "19",
            address : "California, United States",
            phone : "+1 858 259 5285",
            email : "robertrhodes@example.com",
            lastvisit : "Wed Nov 4 2019 09:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "B+",
            type : "Female",
            img : "assets/img/patients/patient10.jpg"
        }   ,
        {
             id : "12",
            key : "#PT0011",
            name : "Garmann Archibald",
            age : "9",
            address : "Colorado, United States",
            phone : "+1 303 607 7075",
            email : "harrywilliams@example.com",
            lastvisit : "Wed Nov 3 2019 06:00:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A-",
            type : "Male",
            img : "assets/img/patients/patient11.jpg"
        }        
    ]

    let reviews = [
      {
         id : 1,
         patient_name : "Michelle Fairfax",
         doctor_name : "Dr. Sofia Brient",
         patient_pic : "assets/img/patients/patient4.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg",
         ratings : "5",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 2,
         patient_name : "Carl Kelly",
         doctor_name : "Dr. Deborah Angel",
         patient_pic : "assets/img/patients/patient3.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg",
         ratings : "4",
         description : "",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 3,
         patient_name : "Charlene Reed",
         doctor_name : "Dr. Ruby Perrin",
         patient_pic : "assets/img/patients/patient1.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 4,
         patient_name : "Daniel Griffing",
         doctor_name : "Dr. Paul Richard",
         patient_pic : "assets/img/patients/patient8.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 5,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Katharine Berthold",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 6,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Katharine Berthold",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 7,
         patient_name : "Gina Moore",
         doctor_name : "Dr. Marvin Campbell",
         patient_pic : "assets/img/patients/patient5.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 8,
         patient_name : "Harry Williams",
         doctor_name : "Dr. Olga Barlow",
         patient_pic : "assets/img/patients/patient10.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 9,
         patient_name : "Joan Gardner",
         doctor_name : "Dr. Linda Tobin",
         patient_pic : "assets/img/patients/patient7.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 10,
         patient_name : "Travis Trimble",
         doctor_name : "Dr. Fred Ortego",
         patient_pic : "assets/img/patients/patient2.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
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
    createdAt : "Wed Dec 4 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-01.jpg",
    doctor_name : "Dr. Tonina Jackson",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"

  },
  {
    id : 2,
    title : "What are the benefits of Online Doctor Booking?",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed Dec 3 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-02.jpg",
    doctor_name : "Dr. Oscar Dill",
    doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    id : 3,
    title : "Benefits of consulting with an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed Dec 3 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-03.jpg",
    doctor_name : "Dr. Loverna Bartley",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
  {
    id : 4,
    title : "5 Great reasons to use an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Dec 2 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-04.jpg",
    doctor_name : "Dr. Marivelle Seal",
    doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg"
  },
  {
    id : 5,
    title : "Online Doctor Appointment Scheduling",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Dec 1 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-05.jpg",
    doctor_name : "Dr. Bree Gann",
    doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg"
  },
  {
    id : 6,
    title : "Simple steps to make your doctor visits exceptional!",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Nov 30 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-06.jpg",
    doctor_name : "Dr. Harmoni Baylor",
    doctor_pic : "assets/img/doctors/doctor-thumb-06.jpg"
  },
  {
    id : 7,
    title : "Choose your own Online Doctor Appointment",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Nov 28 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-07.jpg",
    doctor_name : "Dr. Kamberly Davidsor",
    doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg"
  },
  {
    id : 8,
    title : "Simple steps to visit your doctor today",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Nov 25 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-08.jpg",
    doctor_name : "Dr. Nacham Spears",
    doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg"
  },
   {
    id : 9,
    title : "5 Great reasons to use an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Nov 24 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-09.jpg",
    doctor_name : "Dr. Olumiji Haggard",
    doctor_pic : "assets/img/doctors/doctor-thumb-09.jpg"
  },
   {
    id : 10,
    title : "Online Doctoral Programs",
    description : "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed Nov 23 2019 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-10.jpg",
    doctor_name : "Dr. Tina Burroughs",
    doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg"
  },
  {
    id : 11,
    title1 : "Doccure – Making your clinic painless visit?",
    description1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdBy1 : "Dr. Deborah Angel",
    createdAt1 : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments1 : 12,
    type1 : "Health Tips",
    status1 : "active",
    img1 : "assets/img/blog/blog-01.jpg",
    doctor_name1 : "Dr. Oscar Dill",
    doctor_pic1 : "assets/img/doctors/doctor-thumb-02.jpg"

  },
] 

  let transactions = [
      {
        id : 1,
        invoiceNumber  : '#INV-0010',
        patient_id : '#PT0016',
        patient_name : 'Avrill Gabriel',
        profile : 'assets/img/patients/patient.jpg',
        total_amount : '$450',
        date: "Wed Nov 14 2019 09:41:48 GMT+0530 (India Standard Time)",
        status : 'paid'
      },
      {
        id : 2,
          invoiceNumber  : '#INV-0009',
          patient_id : '#PT0001',
          patient_name : 'Panola Brink',
          profile : 'assets/img/patients/patient1.jpg',
          total_amount : '$200',
          date: "Wed Nov 13 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 3,
          invoiceNumber  : '#INV-0008',
          patient_id : '#PT0002',
          patient_name : 'Denney Rhea',
          profile : 'assets/img/patients/patient2.jpg',
          total_amount : '$100',
          date: "Wed Nov 12 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 4,
          invoiceNumber  : '#INV-0007',
          patient_id : '#PT0003',
          patient_name : 'Matt Leonard',
          profile : 'assets/img/patients/patient3.jpg',
          total_amount : '$350',
          date: "Wed Nov 11 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 5,
          invoiceNumber  : '#INV-0006',
          patient_id : '#PT0004',
          patient_name : 'Teddie Page',
          profile : 'assets/img/patients/patient4.jpg',
          total_amount : '$275',
          date: "Wed Nov 10 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 6,
          invoiceNumber  : '#INV-0005',
          patient_id : '#PT0005',
          patient_name : 'Rebbie Moseley',
          profile : 'assets/img/patients/patient5.jpg',
          total_amount : '$600',
          date: "Wed Nov 9 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 7,
          invoiceNumber  : '#INV-0004',
          patient_id : '#PT0006',
          patient_name : 'Shulamith Blaine',
          profile : 'assets/img/patients/patient6.jpg',
          total_amount : '$50.00',
          date: "Wed Nov 8 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 8,
          invoiceNumber  : '#INV-0003',
          patient_id : '#PT0007',
          patient_name : 'Atalante Quezada',
          profile : 'assets/img/patients/patient7.jpg',
          total_amount : '$400',
          date: "Wed Nov 7 2010 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 9,
          invoiceNumber  : '#INV-0002',
          patient_id : '#PT0008',
          patient_name : 'Zachaios Valencia',
          profile : 'assets/img/patients/patient8.jpg',
          total_amount : '$550',
          date: "Wed Nov 6 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      },
      {
        id : 10,
          invoiceNumber  : '#INV-0001',
          patient_id : '#PT0009',
          patient_name : 'Bratislav Chamberlain',
          profile : 'assets/img/patients/patient9.jpg',
          total_amount : '$100',
          date: "Wed Nov 5 2019 09:41:48 GMT+0530 (India Standard Time)",
          status : 'paid'
      }
  ]
    return {transactions:transactions,comments:comments,favourites:favourites,blogs:blogs,specialityList:specialityList,appointments:appointments,doctors:doctors,patients:patients,reviews:reviews};
 
   }
}
