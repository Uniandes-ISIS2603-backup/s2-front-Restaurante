import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioDetailComponent } from './domicilio-detail.component';

describe('DomicilioDetailComponent', () => {
  let component: DomicilioDetailComponent;
  let fixture: ComponentFixture<DomicilioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomicilioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
