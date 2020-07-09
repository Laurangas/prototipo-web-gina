import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUnidadComponent } from './alta-unidad.component';

describe('AltaUnidadComponent', () => {
  let component: AltaUnidadComponent;
  let fixture: ComponentFixture<AltaUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
