import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStageMobileComponent } from './game-stage-mobile.component';

describe('GameStageMobileComponent', () => {
  let component: GameStageMobileComponent;
  let fixture: ComponentFixture<GameStageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
