import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenComponent } from './full-screen.component';

describe('FullScreenComponent', () => {
  let component: FullScreenComponent;
  let fixture: ComponentFixture<FullScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenComponent]
    });
    fixture = TestBed.createComponent(FullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
