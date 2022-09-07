import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { ParameterHelper } from './parameter-helper';

class ActivatedRouteMock {
  private paramsSubject = new BehaviorSubject(this.testParams);
  private _testParams: {};

  get testParams() {
    return this._testParams;
  }

  set testParams(newParams: any) {
    this._testParams = newParams;
    this.paramsSubject.next(newParams);
  }

  get queryParams() {
    return this.paramsSubject.asObservable();
  }
}

describe('ParameterHelper', () => {
  const activatedRouteMock: ActivatedRouteMock = new ActivatedRouteMock();
  activatedRouteMock.testParams = {
    todo: 'Dies ist ein Todo'
  };

  let parameterHelperSUT: ParameterHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
        ParameterHelper,
      ],
    }).compileComponents();

    parameterHelperSUT = TestBed.get(ParameterHelper);

  });

  it('should get the value from todo parameter as string value', (done) => {
    parameterHelperSUT.getTodoParameterValue().then((result) => {
      expect(result).toEqual('Dies ist ein Todo');
      done();
    });
  });

  // it('should get the value from zins parameter as float value', (done) => {
  //   parameterHelperSUT.getZinsParameterValue().then((result) => {
  //     expect(result).toEqual(1.230);
  //     done();
  //   });
  // });

  // it('should get the value from prefilled parameter as boolean value', async (done) => {
  //   (parameterHelperSUT as any).paramsPromise = Promise.resolve({prefilled: 'true'});
  //   expect(await parameterHelperSUT.isPrefilled()).toBe(true);
  //
  //   (parameterHelperSUT as any).paramsPromise = Promise.resolve({prefilled: 'TrUe'});
  //   expect(await parameterHelperSUT.isPrefilled()).toBe(true);
  //
  //   (parameterHelperSUT as any).paramsPromise = Promise.resolve({prefilled: 'false'});
  //   expect(await parameterHelperSUT.isPrefilled()).toBe(false);
  //
  //   (parameterHelperSUT as any).paramsPromise = Promise.resolve({prefilled: 'quatschmitsoße'});
  //   expect(await parameterHelperSUT.isPrefilled()).toBe(false);
  //
  //   (parameterHelperSUT as any).paramsPromise = Promise.resolve({});
  //   parameterHelperSUT.isPrefilled().catch((reason) => {
  //     expect(reason).toEqual(new Error('parameter prefilled not found'));
  //     done();
  //   });
  // });
});
