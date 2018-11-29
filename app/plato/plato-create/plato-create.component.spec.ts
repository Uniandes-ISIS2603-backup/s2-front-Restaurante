import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoCreateComponent } from './plato-create.component';

describe('PlatoCreateComponent', () => {
  let component: PlatoCreateComponent;
  let fixture: ComponentFixture<PlatoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
