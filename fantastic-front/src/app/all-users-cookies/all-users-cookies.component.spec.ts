import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersCookiesComponent } from './all-users-cookies.component';

describe('AllUsersCookiesComponent', () => {
  let component: AllUsersCookiesComponent;
  let fixture: ComponentFixture<AllUsersCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
