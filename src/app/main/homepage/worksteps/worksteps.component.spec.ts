import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstepsComponent } from './worksteps.component';

describe('WorkstepsComponent', () => {
  let component: WorkstepsComponent;
  let fixture: ComponentFixture<WorkstepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
