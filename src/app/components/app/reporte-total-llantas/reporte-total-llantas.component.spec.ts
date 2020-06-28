import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTotalLlantasComponent } from './reporte-total-llantas.component';

describe('ReporteTotalLlantasComponent', () => {
  let component: ReporteTotalLlantasComponent;
  let fixture: ComponentFixture<ReporteTotalLlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTotalLlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTotalLlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
