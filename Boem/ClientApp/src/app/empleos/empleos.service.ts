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
  
}
