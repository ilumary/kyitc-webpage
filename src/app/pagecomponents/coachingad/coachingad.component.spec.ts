import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingadComponent } from './coachingad.component';

describe('CoachingadComponent', () => {
  let component: CoachingadComponent;
  let fixture: ComponentFixture<CoachingadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachingadComponent]
    });
    fixture = TestBed.createComponent(CoachingadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
