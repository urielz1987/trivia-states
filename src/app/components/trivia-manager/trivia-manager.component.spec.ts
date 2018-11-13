import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaManagerComponent } from './trivia-manager.component';

describe('TriviaManagerComponent', () => {
  let component: TriviaManagerComponent;
  let fixture: ComponentFixture<TriviaManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
