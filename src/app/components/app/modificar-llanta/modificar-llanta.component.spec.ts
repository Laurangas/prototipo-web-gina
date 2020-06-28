import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLlantaComponent } from './modificar-llanta.component';

describe('ModificarLlantaComponent', () => {
  let component: ModificarLlantaComponent;
  let fixture: ComponentFixture<ModificarLlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarLlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
