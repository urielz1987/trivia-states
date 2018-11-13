import { TestBed } from '@angular/core/testing';

import { QuestionsManagerService } from './questions-manager.service';

describe('QuestionsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsManagerService = TestBed.get(QuestionsManagerService);
    expect(service).toBeTruthy();
  });
});
