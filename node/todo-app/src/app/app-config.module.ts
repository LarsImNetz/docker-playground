import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const SERVICE_BASE_PATH = '/api';

export const SERVICE_URLS = {
  SUBMIT: SERVICE_BASE_PATH + '/submit',
  UUID: SERVICE_BASE_PATH + '/uuid'
};

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class AppConfigModule {
}
