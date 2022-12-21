export class Blog {
  createdAt!: Date|string;
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
