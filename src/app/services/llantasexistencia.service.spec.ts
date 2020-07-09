import { TestBed } from '@angular/core/testing';

import { LlantasexistenciaService } from './llantasexistencia.service';

describe('LlantasexistenciaService', () => {
  let service: LlantasexistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlantasexistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
