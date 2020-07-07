import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { ImpellaFlowComponent } from './components/impella-flow/impella-flow.component';
import { PurgeSystemComponent } from './components/purge-system/purge-system.component';
import { CardiacOutputComponent } from './components/cardiac-output/cardiac-output.component';
import { MotorCurrentComponent } from './components/motor-current/motor-current.component';
import { PlacementSignalsComponent } from './components/placement-signals/placement-signals.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpellaFlowComponent,
    PurgeSystemComponent,
    CardiacOutputComponent,
    MotorCurrentComponent,
    PlacementSignalsComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
