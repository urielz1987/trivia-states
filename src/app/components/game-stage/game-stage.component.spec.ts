import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStageComponent } from './game-stage.component';

describe('GameStageComponent', () => {
  let component: GameStageComponent;
  let fixture: ComponentFixture<GameStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
