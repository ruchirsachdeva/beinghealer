export class Blog {
  createdAt!: Date | string;
  img!: string;
  comments!: number;
  createdBy!: string;
  description!: string;
  doctor_pic?: string;
  id!: number;
  title!: string;
  type!: string;
  doctor_name?: string;
  tags!: string[];
  status!: string;
  score?: number;
}

export class User {
  id?: number;
  username?: string;
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  age?: string;
  since?: Date|string;
  status?: string;
  password?: string;
  role?: string;
}

export class Admin extends User{}

export class Patient extends User {
  img!: string;
  address?: string;
  // phone: string;
  // name: string;
  paid?: string;
  lastvisit?: string;
  sex!: string;
  key!: string;
}

// {
//   id : "1",
//     key : "#PT0016",
//   name : "David Pope",
//   age : "38",
//   address : "Newyork, USA",
//   phone : "+1 923 782 4575",
//   email : "richard@example.com",
//   lastvisit : "Wed Nov 14 2020 10:00:48 GMT+0530 (India Standard Time)",
//   paid : "100.00",
//   bloodgroup : "AB+",
//   type : "Male",
//   img : "assets/img/patients/patient.jpg"
// }

export class Doctor extends User{
  doctor_name?: string;
  booking_fees?: string;
  specializations?: string[];
  speciality_profile?: string;
  profile?: string;
  description?: string;
  services?: string[];
  video_call?: string;
  type?: string;
  consulting_fees?: string;
  availableTime?: string;
  Education?: string;
  Price?: string;
  Available?: string;
  // location?: string;
  Earned?: string;
  work_experience?:  WorkExperience[];
  // since?: Date|string;
  // status?: string;
  // password?: string;
}

export class WorkExperience  {
duration!: string; title!: string
}


export class SignupForm {
  username!: string;
  name?: string;
  email!: string;
  password!: string;
  latitude?: number;
  longitude?: number;
  role!: string;
  selectedIndex?: number;
  base64?: string;
  imageSource?: string
}

export enum Role {
  Healer = 'healer',
  Patient =  'patient',
  Admin = 'admin'
}

export class TokenInfo{
userId!: number;
role!: string[];
token!: string;
issuedAt?: Date|string;
expiresAt?: Date|string;
}
