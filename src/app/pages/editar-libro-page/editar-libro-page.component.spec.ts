import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLibroPageComponent } from './editar-libro-page.component';

describe('EditarLibroPageComponent', () => {
  let component: EditarLibroPageComponent;
  let fixture: ComponentFixture<EditarLibroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarLibroPageComponent]
    });
    fixture = TestBed.createComponent(EditarLibroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
