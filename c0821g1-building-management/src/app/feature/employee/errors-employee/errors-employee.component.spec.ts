import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsEmployeeComponent } from './errors-employee.component';

describe('ErrorsEmployeeComponent', () => {
  let component: ErrorsEmployeeComponent;
  let fixture: ComponentFixture<ErrorsEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
