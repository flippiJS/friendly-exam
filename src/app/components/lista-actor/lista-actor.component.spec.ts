import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActorComponent } from './lista-actor.component';

describe('ListaActorComponent', () => {
  let component: ListaActorComponent;
  let fixture: ComponentFixture<ListaActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
