import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { RetryConfig, RetryModule } from '@office/retry';
import { SwiperModule } from '@office/swiper';

const config: RetryConfig = {
  retryCount: 3
}

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, RetryModule.init(config), SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
