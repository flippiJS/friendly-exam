import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMateriasComponent } from './alta-materias.component';

describe('AltaMateriasComponent', () => {
  let component: AltaMateriasComponent;
  let fixture: ComponentFixture<AltaMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
