// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './webapi/in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';


import { Store, Dispatcher, Action } from './store';
/*
bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS
]);
*/
bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  { provide: Dispatcher, useValue: new Dispatcher<Action>() },
  { provide: Store, useFactory: (dispatcher) => new Store(dispatcher), deps: [Dispatcher] },
  disableDeprecatedForms(),
  provideForms()
  // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/