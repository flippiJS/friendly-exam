import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMailComponent } from './ver-mail.component';

describe('VerMailComponent', () => {
  let component: VerMailComponent;
  let fixture: ComponentFixture<VerMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
