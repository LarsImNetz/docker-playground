import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable()
export class ParameterHelper {

  private subscription: Subscription;

  private params: Params;

  private readonly paramsPromise: Promise<Params>;

  private static isParameterAvailable(
    params,
    name: string,
  ) {
    return Object.keys(params).indexOf(name) >= 0;
  }

  constructor(private readonly route: ActivatedRoute) {
    this.paramsPromise = new Promise((resolve) => {
      this.subscription = this.route.queryParams.subscribe((params: Params) => {
        if (Object.keys(params).length) {
          this.params = params;
          resolve(params);
        }
      });
    });
  }

  public getTodoParameterValue(): Promise<string> {
    return this.getQueryParameterAsString('todo');
  }

  // public getKaufpreisParameterValue(): Promise<number> {
  // 	return this.getQueryParameterAsInteger("p_kaufpreis");
  // }
  //
  // public isPrefilled(): Promise<boolean> {
  // 	return this.getQueryParameterAsBoolean("prefilled");
  // }

  private getBase64DecodedParameter(parameterName: string): Promise<string> {
    return new Promise((
      resolve,
      reject,
    ) => {
      this.getQueryParameterAsString(parameterName).then((result) => {
        resolve(atob(result));
      }).catch(reject);
    });
  }

  private async getQueryParameterAsBoolean(name: string): Promise<boolean> {
    try {
      const paramValue = await this.getQueryParameterAsString(name);
      return paramValue.toLowerCase() === 'true';
    } catch (e) {
      throw new Error(e);
    }
  }

  private getQueryParameterAsInteger(name: string): Promise<number> {
    return new Promise((
      resolve,
      reject,
    ) => {
      this.paramsPromise.then((params) => {
        if (ParameterHelper.isParameterAvailable(params, name)) {
          const result = parseInt(params[name], 10);
          if (isNaN(result)) {
            reject(`parameter ${name} is not of type integer`);
          }
          else {
            resolve(result);
          }
        }
        else {
          reject(`parameter ${name} not found`);
        }
      });
    });
  }

  private getQueryParameterAsFloat(name: string): Promise<number> {
    return new Promise((
      resolve,
      reject,
    ) => {
      this.paramsPromise.then((params) => {
        if (ParameterHelper.isParameterAvailable(params, name)) {
          const result = parseFloat((params[name] || '').replace(/,/g, ''));
          if (isNaN(result)) {
            reject(`parameter ${name} is not of type float`);
          }
          else {
            resolve(result);
          }
        }
        else {
          reject(`parameter ${name} not found`);
        }
      });
    });
  }

  private getQueryParameterAsString(name: string): Promise<string> {
    return new Promise((
      resolve,
      reject,
    ) => {
      this.paramsPromise.then((params) => {
        if (ParameterHelper.isParameterAvailable(params, name)) {
          resolve(params[name]);
        }
        else {
          reject(`parameter ${name} not found`);
        }
      });
    });
  }
}
