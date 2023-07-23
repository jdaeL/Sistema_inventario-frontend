import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLibroPageComponent } from './crear-libro-page.component';

describe('CrearLibroPageComponent', () => {
  let component: CrearLibroPageComponent;
  let fixture: ComponentFixture<CrearLibroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearLibroPageComponent]
    });
    fixture = TestBed.createComponent(CrearLibroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
