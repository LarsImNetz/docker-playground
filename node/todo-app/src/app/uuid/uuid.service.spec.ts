import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SERVICE_URLS } from '../app-config.module';
import { UuidService } from './uuid.service';

describe('UuidService', () => {
  let httpMock: HttpTestingController;
  let service: UuidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [UuidService],
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(UuidService);
  });

  it('should return a UUID', fakeAsync(() => {
    const actual = service.getUuid();

    const expected = 'Man muss erst einige Male sterben, um wirklich leben zu können';

    actual.then((response) => {
      expect(response).toEqual(expected);
    });

    tick();

    httpMock.expectOne(SERVICE_URLS.UUID).flush(expected);

  }));

  it('should throw an error if the request breaks', fakeAsync(() => {
    service.getUuid().catch((reason) => {
      expect(reason).toBe('Invalid Request: We no speak Uuidericano');
    });

    tick();

    httpMock.expectOne(SERVICE_URLS.UUID)
      .flush(null, {status: 400, statusText: 'We no speak Uuidericano'});
  }));

});
