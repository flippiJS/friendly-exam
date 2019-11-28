import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasComponent } from './tabla-materias.component';

describe('TablaMateriasComponent', () => {
  let component: TablaMateriasComponent;
  let fixture: ComponentFixture<TablaMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
