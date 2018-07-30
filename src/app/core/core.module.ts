import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JsonApiService } from './api/json-api.service'
import { LayoutService } from '../shared/layout/layout.service'



import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import {TabsModule, ProgressbarModule, TooltipModule, BsDropdownModule, AlertModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    JsonApiService,
    LayoutService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
