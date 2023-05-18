import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadiasComponent } from './pasadias.component';

describe('PasadiasComponent', () => {
  let component: PasadiasComponent;
  let fixture: ComponentFixture<PasadiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasadiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasadiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
