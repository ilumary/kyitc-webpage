import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamonialsComponent } from './testamonials.component';

describe('TestamonialsComponent', () => {
  let component: TestamonialsComponent;
  let fixture: ComponentFixture<TestamonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestamonialsComponent]
    });
    fixture = TestBed.createComponent(TestamonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
