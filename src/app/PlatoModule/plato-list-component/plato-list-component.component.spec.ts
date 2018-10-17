import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoListComponentComponent } from './plato-list-component.component';

describe('PlatoListComponentComponent', () => {
  let component: PlatoListComponentComponent;
  let fixture: ComponentFixture<PlatoListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
