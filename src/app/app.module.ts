import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TreeModule } from 'primeng/primeng';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/primeng';
import { MatProgressBarModule, MatExpansionModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatGridList, MatGridTile } from '@angular/material';
import { RouterModule } from '@angular/router'
import { GrowlModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import {
  SidenavheaderComponent,
  ChefhierarchyComponent,
  HeaderNavComponent,
  ActionMenuComponent,
  LeftMenuComponent,
  MenuSectionHeadingComponent,
  SystemInfoCardComponent,
  ContainerComponent,
  ChefInfoContainerComponent,
  DishInfoTableComponent,
  DishInfoAccordianComponent,
  LoggingBoardComponent,
  DashboardComponent,
  DishDetailsComponent,
  LoggingResponseContainerComponent,
  LoggingContainerComponent
} from './components/index'

import {
  DishService,
  ChefHierarchyService,
  ChefService,
  StorageService,
  LoggingService,
  Configuration
} from './services/index'

import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    SidenavheaderComponent,
    HeaderNavComponent,
    SystemInfoCardComponent,
    ChefhierarchyComponent,
    ActionMenuComponent,
    LeftMenuComponent,
    MenuSectionHeadingComponent,
    ContainerComponent,
    ChefInfoContainerComponent,
    DishInfoTableComponent,
    DishInfoAccordianComponent,
    LoggingBoardComponent,
    DashboardComponent,
    DishDetailsComponent,
    LoggingResponseContainerComponent,
    LoggingContainerComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
    TreeModule,
    PanelModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    GrowlModule,
    HttpModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    DishService,
    ChefHierarchyService,
    ChefService,
    StorageService,
    LoggingService,
    Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
