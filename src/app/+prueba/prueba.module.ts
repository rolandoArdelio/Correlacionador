import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pruebaRouting } from './prueba.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {pruebaComponent} from "./prueba.component";
import {MorrisGraphModule} from "../shared/graphs/morris-graph/morris-graph.module";

@NgModule({
  imports: [
    CommonModule,
    pruebaRouting,
      SmartadminModule,MorrisGraphModule
  ],
  declarations: [pruebaComponent]
})
export class pruebaModule { }
