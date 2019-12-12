import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaExamenComponent } from './alta-examen.component';

describe('AltaExamenComponent', () => {
  let component: AltaExamenComponent;
  let fixture: ComponentFixture<AltaExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
