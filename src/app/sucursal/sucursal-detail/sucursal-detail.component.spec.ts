import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalDetailComponent } from './sucursal-detail.component';

describe('SucursalDetailComponent', () => {
  let component: SucursalDetailComponent;
  let fixture: ComponentFixture<SucursalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

