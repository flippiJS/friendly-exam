import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotarMateriasComponent } from './anotar-materias.component';

describe('AnotarMateriasComponent', () => {
  let component: AnotarMateriasComponent;
  let fixture: ComponentFixture<AnotarMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotarMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
