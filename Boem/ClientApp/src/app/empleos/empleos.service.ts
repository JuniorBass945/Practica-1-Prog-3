import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmpleos } from './IEmpleos';
import { ICategory } from './ICategory';

@Injectable()
export class EmpleosService {


  private apiUrl = this.baseUrl + "api/";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }


  public getEmpleos(): Observable<IEmpleos[]> {
    return this.http.get<IEmpleos[]>(this.apiUrl +"JobPostings");

  }

  public GetJobsByCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl + "Categories/GetJobsByCategory");
  }

  public AddEmpleo(empleo: IEmpleos) {
    return this.http.post<IEmpleos>(this.apiUrl +'JobPostings', empleo);
  }

  public getCategories():Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl + "Categories");
  }

  public getJobTypes(): Observable<any[]> {
    return this.http.get<ICategory[]>(this.apiUrl + "JobTypes");
  }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "Users");
  }

  public getEmpleo(id: number): Observable<IEmpleos> {
    return this.http.get<IEmpleos>(this.apiUrl + "JobPostings/" + id);

  }

  public editEmpleo(empleo: IEmpleos): Observable<IEmpleos> {
    return this.http.put<IEmpleos>(this.apiUrl + "JobPostings/" + empleo.jobPostingId, empleo);
  }

  public getCategoryJob(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(this.apiUrl + "Categories/" + id);
  }
  
}
