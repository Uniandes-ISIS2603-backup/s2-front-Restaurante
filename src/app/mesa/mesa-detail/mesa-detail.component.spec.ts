import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaDetailComponent } from './mesa-detail.component';

describe('MesaDetailComponent', () => {
  let component: MesaDetailComponent;
  let fixture: ComponentFixture<MesaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
