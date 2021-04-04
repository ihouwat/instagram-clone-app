import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsForm } from './account-settings-form.component';

describe('AccountSettingsComponent', () => {
  let component: AccountSettingsForm;
  let fixture: ComponentFixture<AccountSettingsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingsForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
