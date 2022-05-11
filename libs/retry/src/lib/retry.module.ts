import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RetryInterceptor } from './retry.interceptor.service';
import { RETRY_CONFIG, RetryConfig } from './retry.config';

@NgModule({
  imports: [CommonModule],


})
export class RetryModule {
  static init(config: RetryConfig): ModuleWithProviders<RetryModule> {
    return {
      ngModule: RetryModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RetryInterceptor,
          multi: true
        },
        {
          provide: RETRY_CONFIG,
          useValue: config,
          multi: false
        }
      ]
    }
  }
 }
