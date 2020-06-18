import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmpleosComponent } from './empleos/empleos.component';
import { CreateOrUpdateEmpresaComponent } from './create-or-update-empresa/create-or-update-empresa.component';
import { EmpleosService } from './empleos/empleos.service';
import { SearchCategoryComponent } from './search-category/search-category.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmpleosComponent,
    CreateOrUpdateEmpresaComponent,
    SearchCategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SelectDropDownModule,
    RouterModule.forRoot([
      { path: '', component: EmpleosComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'empleos', component: EmpleosComponent },
      { path: 'empleos/add', component: CreateOrUpdateEmpresaComponent },
      { path: 'empleos/edit/:id', component: CreateOrUpdateEmpresaComponent },
      { path: 'empleos/category/:id', component: SearchCategoryComponent }

    ])
  ],
  providers: [EmpleosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
