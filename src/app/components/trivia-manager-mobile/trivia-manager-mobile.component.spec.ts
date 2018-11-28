import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaManagerMobileComponent } from './trivia-manager-mobile.component';

describe('TriviaManagerMobileComponent', () => {
  let component: TriviaManagerMobileComponent;
  let fixture: ComponentFixture<TriviaManagerMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaManagerMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaManagerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
