import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteModuleListComponent } from './cliente-module-list.component';

describe('ClienteModuleListComponent', () => {
  let component: ClienteModuleListComponent;
  let fixture: ComponentFixture<ClienteModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteModuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
