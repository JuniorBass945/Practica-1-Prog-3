import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { EmpleosService } from '../empleos/empleos.service';
import { ActivatedRoute } from '@angular/router';
import { IEmpleos } from '../empleos/IEmpleos';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  categoryJob: IEmpleos[];

  columns = [{ prop: 'location', name: '<strong>Ubicacion</strong>' }, { prop: 'position', name: '<strong>Puesto</strong>' }, { prop: 'company', name: '<strong>Empresa</strong>' }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  valorBusc: string;
  searchResult: IEmpleos[];
  categoryName: string;

  constructor(private empleosService: EmpleosService, private activedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {

    this.activedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.empleosService.getCategoryJob(params["id"])
        .subscribe(category => {
          this.categoryJob = category.jobPosting;
          this.searchResult = category.jobPosting;
          this.categoryName = category.categoryName;
        },
          error => console.error(error));

    });

  }


  jobsSearcher() {

    this.valorBusc = (this.valorBusc) ? this.valorBusc : " ";


    let resul = [];





    resul = this.categoryJob.filter(empleo =>
      empleo.location.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1 ||
      empleo.position.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1 ||
      empleo.company.toLowerCase().indexOf(this.valorBusc.toLowerCase().trim()) > -1);

    console.log(resul);



    this.searchResult = resul;



  }




}
