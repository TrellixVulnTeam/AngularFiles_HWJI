import { Property } from './property';

describe('Property', () => {
  it('should create an instance', () => {
    expect(new Property()).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListClass } from './property';

describe('Property', () => {
  let propertyObj: Property;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    propertyObj = {
      propertyId: 123,
      propertyName: "Ryans House",
      description: "Seattle House",
      bedrooms: 3,
      bathrooms: 3,
      sqFeet: 3000,
      address: "123 abc ave",
      averageRating: 5
    };
  });

  it('should create an instance', () => {
    expect(propertyObj).toBeTruthy();
  });
});
