import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLibroPageComponent } from './eliminar-libro-page.component';

describe('EliminarLibroPageComponent', () => {
  let component: EliminarLibroPageComponent;
  let fixture: ComponentFixture<EliminarLibroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarLibroPageComponent]
    });
    fixture = TestBed.createComponent(EliminarLibroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
