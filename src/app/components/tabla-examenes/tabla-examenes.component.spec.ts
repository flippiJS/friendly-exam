import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaExamenesComponent } from './tabla-examenes.component';

describe('TablaExamenesComponent', () => {
  let component: TablaExamenesComponent;
  let fixture: ComponentFixture<TablaExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
