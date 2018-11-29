import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoListComponent } from './plato-list.component';

describe('PlatoListComponent', () => {
  let component: PlatoListComponent;
  let fixture: ComponentFixture<PlatoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
