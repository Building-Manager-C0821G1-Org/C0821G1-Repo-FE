import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceDeleteComponent } from './space-delete.component';

describe('SpaceDeleteComponent', () => {
  let component: SpaceDeleteComponent;
  let fixture: ComponentFixture<SpaceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
