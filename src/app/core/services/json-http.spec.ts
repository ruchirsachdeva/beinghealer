import { TestBed, inject } from '@angular/core/testing';

import { JsonHttp } from './json-http';

describe('JsonHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonHttp]
    });
  });

  it('should be created', inject([JsonHttp], (service: JsonHttp) => {
    expect(service).toBeTruthy();
  }));
});
