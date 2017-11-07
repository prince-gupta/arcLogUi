import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TreeModule } from 'primeng/primeng';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/primeng';
import {MatExpansionModule, MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';

import {SidenavheaderComponent} from './components/sideMenu/sidenavheader/sidenavheader.component'
import {ChefhierarchyComponent} from './components/sideMenu/chefhierarchy/chefhierarchy.component'
import {HeaderNavComponent} from './components/container/header-nav/header-nav.component'
import {ActionMenuComponent} from './components/sideMenu/action-menu/action-menu.component'
import {LeftMenuComponent} from './components/sideMenu/left-menu/left-menu.component'
import {MenuSectionHeadingComponent} from './components/sideMenu/menu-section-heading/menu-section-heading.component'

import {SystemInfoCardComponent} from './components/container/system-info-card/system-info-card.component'
import {ContainerComponent} from './components/container/container/container.component'
import {ChefInfoContainerComponent} from './components/container/chef-info-container/chef-info-container.component'
import {DishInfoTableComponent} from './components/container/dish-info-table/dish-info-table.component'
import {DishInfoAccordianComponent} from './components/container/dish-info-accordian/dish-info-accordian.component'

import {appRoutes} from './routes'

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
    DishInfoAccordianComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
    TreeModule,
    PanelModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
