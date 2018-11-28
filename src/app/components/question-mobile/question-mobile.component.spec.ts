import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMobileComponent } from './question-mobile.component';

describe('QuestionMobileComponent', () => {
  let component: QuestionMobileComponent;
  let fixture: ComponentFixture<QuestionMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
