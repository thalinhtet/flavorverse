import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkeletonComponent } from './profile-skeleton.component';

describe('ProfileSkeletonComponent', () => {
  let component: ProfileSkeletonComponent;
  let fixture: ComponentFixture<ProfileSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSkeletonComponent]
    });
    fixture = TestBed.createComponent(ProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
