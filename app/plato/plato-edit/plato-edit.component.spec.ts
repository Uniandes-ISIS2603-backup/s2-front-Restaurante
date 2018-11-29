import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoEditComponent } from './plato-edit.component';

describe('PlatoEditComponent', () => {
  let component: PlatoEditComponent;
  let fixture: ComponentFixture<PlatoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
