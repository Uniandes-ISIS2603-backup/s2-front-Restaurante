import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioCreateComponent } from './domicilio-create.component';

describe('DomicilioCreateComponent', () => {
  let component: DomicilioCreateComponent;
  let fixture: ComponentFixture<DomicilioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomicilioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
