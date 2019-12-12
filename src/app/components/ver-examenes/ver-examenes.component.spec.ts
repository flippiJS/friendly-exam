import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExamenesComponent } from './ver-examenes.component';

describe('VerExamenesComponent', () => {
  let component: VerExamenesComponent;
  let fixture: ComponentFixture<VerExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
