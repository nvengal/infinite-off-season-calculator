/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeightService } from './weight.service';

describe('WeightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeightService]
    });
  });

  it('should ...', inject([WeightService], (service: WeightService) => {
    expect(service).toBeTruthy();
  }));
});
