import { TestBed } from '@angular/core/testing';

import { LlantaentradaService } from './llantaentrada.service';

describe('LlantaentradaService', () => {
  let service: LlantaentradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlantaentradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
