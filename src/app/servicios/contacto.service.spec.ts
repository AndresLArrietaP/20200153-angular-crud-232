import { TestBed } from '@angular/core/testing';

import { Contactoservicio} from './contacto.service';

describe('ContactoServiceService', () => {
  let service: Contactoservicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contactoservicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});