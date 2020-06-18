import { ICategory } from "./ICategory";

export interface IEmpleos {
  jobPostingId: number;
  categoryId: number;
  jobType: number;
  company: string;
  logo: any;
  url: string;
  position: string;
  location: string;
  description: string;
  creationDate: Date;
  personalId: number;
  category: ICategory | any;
  personal: object | any;




}
