import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesServiceComponent } from './heroes-service.component';

describe('HeroesServiceComponent', () => {
  let component: HeroesServiceComponent;
  let fixture: ComponentFixture<HeroesServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
