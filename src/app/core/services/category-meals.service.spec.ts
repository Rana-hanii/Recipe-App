import { TestBed } from '@angular/core/testing';

import { CategoryMealsService } from './category-meals.service';

describe('CategoryMealsService', () => {
  let service: CategoryMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
