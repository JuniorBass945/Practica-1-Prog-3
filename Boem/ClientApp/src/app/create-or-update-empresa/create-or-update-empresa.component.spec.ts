import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateEmpresaComponent } from './create-or-update-empresa.component';

describe('CreateOrUpdateEmpresaComponent', () => {
  let component: CreateOrUpdateEmpresaComponent;
  let fixture: ComponentFixture<CreateOrUpdateEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
