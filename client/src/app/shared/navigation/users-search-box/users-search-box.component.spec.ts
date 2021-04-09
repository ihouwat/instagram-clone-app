import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchBoxComponent } from './users-search-box.component';

describe('UsersSearchBoxComponent', () => {
  let component: UsersSearchBoxComponent;
  let fixture: ComponentFixture<UsersSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
