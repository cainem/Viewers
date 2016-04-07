/// <reference path="../typings/browser.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {RootMenuComponent} from "./rootMenu/rootMenu.component";
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(RootMenuComponent,  [ ROUTER_PROVIDERS ]).catch(err => console.error(err));