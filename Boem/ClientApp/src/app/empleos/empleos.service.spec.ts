import { TestBed, inject } from '@angular/core/testing';

import { EmpleosService } from './empleos.service';

describe('EmpleosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleosService]
    });
  });

  it('should be created', inject([EmpleosService], (service: EmpleosService) => {
    expect(service).toBeTruthy();
  }));
});
