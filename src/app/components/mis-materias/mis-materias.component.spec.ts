import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMateriasComponent } from './mis-materias.component';

describe('MisMateriasComponent', () => {
  let component: MisMateriasComponent;
  let fixture: ComponentFixture<MisMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
