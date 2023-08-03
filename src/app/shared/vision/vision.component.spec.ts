import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './vision.component';

describe('NavbarComponent', () => {
  let component: VisionComponent;
  let fixture: ComponentFixture<VisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionComponent]
    });
    fixture = TestBed.createComponent(VisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
