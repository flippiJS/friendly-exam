import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPeliComponent } from './alta-peli.component';

describe('AltaPeliComponent', () => {
  let component: AltaPeliComponent;
  let fixture: ComponentFixture<AltaPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
