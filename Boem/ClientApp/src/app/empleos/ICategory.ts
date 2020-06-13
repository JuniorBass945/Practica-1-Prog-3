import { IEmpleos } from "./IEmpleos";

export interface ICategory {
  categoryId: number;
  categoryName: string;
  jobPosting: IEmpleos[];
  
}
