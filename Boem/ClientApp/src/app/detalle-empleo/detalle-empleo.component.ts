import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../empleos/empleos.service';
import { ActivatedRoute } from '@angular/router';
import { IEmpleos } from '../empleos/IEmpleos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-empleo',
  templateUrl: './detalle-empleo.component.html',
  styleUrls: ['./detalle-empleo.component.css']
})
export class DetalleEmpleoComponent implements OnInit {
  empleo: IEmpleos;


  constructor(private empleosService: EmpleosService, private activedRoute: ActivatedRoute, private location: Location) { }


  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.empleosService.getEmpleo(params["id"])
        .subscribe(empleo => {
          this.empleo = empleo;
          console.log(empleo);
        },
          error => console.error(error));

    });
  }

  goBack() {
    this.location.back();
  }

}
