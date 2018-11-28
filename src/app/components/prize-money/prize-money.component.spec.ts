import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeMoneyComponent } from './prize-money.component';

describe('PrizeMoneyComponent', () => {
  let component: PrizeMoneyComponent;
  let fixture: ComponentFixture<PrizeMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
