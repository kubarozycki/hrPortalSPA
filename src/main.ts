import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Setup } from './common/setup';

if (environment.production) {
  enableProdMode();
}

Setup();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
