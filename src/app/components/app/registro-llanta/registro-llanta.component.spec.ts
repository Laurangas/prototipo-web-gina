import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLlantaComponent } from './registro-llanta.component';

describe('RegistroLlantaComponent', () => {
  let component: RegistroLlantaComponent;
  let fixture: ComponentFixture<RegistroLlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
