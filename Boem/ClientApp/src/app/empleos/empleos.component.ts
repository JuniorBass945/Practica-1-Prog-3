import { Component, OnInit } from '@angular/core';
import { IEmpleos } from './IEmpleos';
import { EmpleosService } from './empleos.service';
import { ICategory } from './ICategory';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css' ]
})
export class EmpleosComponent implements OnInit {

  empleosPorCategoria: ICategory[];
  ColumnMode = ColumnMode;
  searchResult: ICategory[];

  valorBusc: string;

  constructor(private empleosService: EmpleosService) {

  }

  ngOnInit() {

    this.empleosService.GetJobsByCategory()
      .subscribe(empleosXcategorias => {
        this.empleosPorCategoria = empleosXcategorias;
        this.searchResult = empleosXcategorias;
      },
      error => console.error(error));
  }


  reverseJobs(jobs: IEmpleos[]) {

    return jobs.sort(function (a, b) {
      if (a.jobPostingId < b.jobPostingId) {
        return 1;
      }
      if (a.jobPostingId > b.jobPostingId) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });


  }

  jobsSearcher() {

    this.valorBusc = (this.valorBusc) ? this.valorBusc : " ";


    const resul = [];
    this.empleosPorCategoria.forEach(val => resul.push(Object.assign({}, val)));

    resul.forEach(categoria => {

      categoria.jobPosting = categoria.jobPosting.filter(empleo =>
        empleo.location.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1 ||
        empleo.position.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1 ||
        empleo.company.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1 ||
        categoria.categoryName.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1)

    });


    this.searchResult = resul;

    
   
  }



}
