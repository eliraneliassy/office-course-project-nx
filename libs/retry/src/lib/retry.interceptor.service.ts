import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { RETRY_CONFIG, RetryConfig } from './retry.config';

@Injectable()
export class RetryInterceptor implements HttpInterceptor{

  constructor(@Inject(RETRY_CONFIG) private retryConfig: RetryConfig) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return  next.handle(req).pipe(
      retry(this.retryConfig.retryCount)
    )
  }
}
