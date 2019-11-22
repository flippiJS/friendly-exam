import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosEnMateriasComponent } from './alumnos-en-materias.component';

describe('AlumnosEnMateriasComponent', () => {
  let component: AlumnosEnMateriasComponent;
  let fixture: ComponentFixture<AlumnosEnMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosEnMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosEnMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
