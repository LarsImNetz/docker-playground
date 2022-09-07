import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SubmitService } from './submit.service';

describe('SubmitService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SubmitService]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: SubmitService = TestBed.get(SubmitService);
    expect(service).toBeTruthy();
  });
});
