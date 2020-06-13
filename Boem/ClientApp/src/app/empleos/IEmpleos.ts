import { ICategory } from "./ICategory";

export interface IEmpleos {
  jobPostingId: number;
  categoryId: number;
  jobType: number;
  company: string;
  logo: string;
  url: string;
  position: string;
  location: string;
  description: string;
  creationDate: Date;
  personalId: number;
  category: ICategory;
  personal: object;




}
