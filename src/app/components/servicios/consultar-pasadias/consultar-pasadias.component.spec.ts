import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPasadiasComponent } from './consultar-pasadias.component';

describe('ConsultarPasadiasComponent', () => {
  let component: ConsultarPasadiasComponent;
  let fixture: ComponentFixture<ConsultarPasadiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPasadiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPasadiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
