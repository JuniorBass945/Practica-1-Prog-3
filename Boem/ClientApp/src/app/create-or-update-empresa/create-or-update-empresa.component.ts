import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmpleos } from '../empleos/IEmpleos';
import { EmpleosService } from '../empleos/empleos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from '../empleos/ICategory';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-or-update-empresa',
  templateUrl: './create-or-update-empresa.component.html',
  styleUrls: ['./create-or-update-empresa.component.css']
})
export class CreateOrUpdateEmpresaComponent implements OnInit {
  value: any;
  formGroup: FormGroup;
  categories: ICategory[];
  JobTypes: any[];
  users: any[];
  img: File;
  empleoId: number;



  config: any = {
    displayKey: "categoryName",
    search: true,
    placeholder: 'Seleccionar categoria',
    moreText: 'Mas',
    noResultsFound: 'No se encontraton resultados',
    searchPlaceholder: 'Buscar',
    searchOnKey: 'categoryName'
  };

  config2: any = {
    displayKey: "name",
    search: true,
    placeholder: 'Seleccionar usuario',
    moreText: 'Mas',
    noResultsFound: 'No se encontraton resultados',
    searchPlaceholder: 'Buscar',
    searchOnKey: 'name'
  };
    edicion: boolean;

  



  constructor(private fb: FormBuilder, private empleosService: EmpleosService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      categoryId: 0,
      jobType: 0,
      company: '',
      logo: '',
      url: '',
      position: '',
      location: '',
      description: '',
      creationDate: '',
      personalId: '',
      category: 0,
      personal:0
    });

    this.empleosService.getCategories()
      .subscribe(categorias => this.categories = categorias,
      error => console.error(error));

    this.empleosService.getJobTypes()
      .subscribe(types => this.JobTypes = types,
      error => console.error(error));

    this.empleosService.getUsers()
      .subscribe(users => this.users = users,
      error => console.error(error));

    this.activateRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.edicion = true;

      this.empleoId = params["id"];

      this.empleosService.getEmpleo(this.empleoId)
        .subscribe(empleo => this.formGroup.setValue({
          categoryId: empleo.categoryId,
          jobType: empleo.jobType,
          company: empleo.company,
          logo: "",
          url: empleo.url,
          position: empleo.position,
          location: empleo.location,
          description: empleo.description,
          creationDate: this.formatDate(empleo.creationDate),
          personalId: empleo.personalId,
          category: empleo.category,
          personal: empleo.personal
        }),
          error => console.error(error));
    });

    

  }

  formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

  selectionChanged(item: any) {

    let empleo: IEmpleos = Object.assign({}, this.formGroup.value);


    if (typeof item.value !== "undefined") {
      let value: {} = Object.values(item.value)[0];

      if (Object.keys(item.value)[0] == 'categoryId') {
        empleo.categoryId = Number(value);
      } else {
        empleo.personalId = Number(value);
      }

    } else {
      empleo.personal = typeof empleo.personal === "undefined" ?  0 : empleo.personal;
      empleo.category = typeof empleo.category === "undefined" ?  0 : empleo.category; 

    }

    this.formGroup.setValue(empleo);


    }
    
  selectionClosed(item: any) {
    console.log(item);
    console.log(this.formGroup);

  }

  handleFileInput(files: FileList) {
    this.img = files[0];

  }


  save() {
    
    let empleo: IEmpleos = Object.assign({}, this.formGroup.value);
    delete empleo.category;
    delete empleo.personal;

    if (this.edicion) {
      empleo.jobPostingId = this.empleoId;
      this.empleosService.editEmpleo(empleo)
        .subscribe(empleo => this.onSuccess(),
          error => console.error(error));

    } else {
      this.empleosService.AddEmpleo(empleo)
        .subscribe(empleo => this.onSuccess(),
          error => console.error(error));

    }


  }

  onSuccess() {
    this.router.navigate(["/empleos"]);         
  }






}
