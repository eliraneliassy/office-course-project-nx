import { InjectionToken } from '@angular/core';

export interface RetryConfig{
  retryCount: number;
}

export const RETRY_CONFIG = new InjectionToken<RetryConfig>('Retry Config');
