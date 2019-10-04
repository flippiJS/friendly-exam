import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeliculaActorComponent } from './lista-pelicula-actor.component';

describe('ListaPeliculaActorComponent', () => {
  let component: ListaPeliculaActorComponent;
  let fixture: ComponentFixture<ListaPeliculaActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPeliculaActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPeliculaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
