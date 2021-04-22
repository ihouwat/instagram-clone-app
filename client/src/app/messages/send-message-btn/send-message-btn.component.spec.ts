import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageBtnComponent } from './send-message-btn.component';

describe('SendMessageBtnComponent', () => {
  let component: SendMessageBtnComponent;
  let fixture: ComponentFixture<SendMessageBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
