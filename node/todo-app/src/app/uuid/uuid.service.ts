import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_URLS } from '../app-config.module';

@Injectable()
export class UuidService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getUuid(): Promise<string> {
    return new Promise<string>((
      resolve,
      reject,
    ) => {
      this.httpClient.get(SERVICE_URLS.UUID, {responseType: 'text'})
        .subscribe((response: string) => {
          resolve(response);
        }, (error) => {
          reject('Invalid Request: ' + error.statusText);
        });
    });
  }
}
