import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDetallePageComponent } from './libro-detalle-page.component';

describe('LibroDetallePageComponent', () => {
  let component: LibroDetallePageComponent;
  let fixture: ComponentFixture<LibroDetallePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroDetallePageComponent]
    });
    fixture = TestBed.createComponent(LibroDetallePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
