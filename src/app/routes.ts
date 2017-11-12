import {Routes} from '@angular/router'
import {AppComponent} from './app.component'

import {
    LoggingBoardComponent,
    DashboardComponent,
    DishDetailsComponent
} from './components/index'

export const appRoutes :Routes = [
    {path: 'dashboard', component : DashboardComponent},
    {path: 'logging', component : LoggingBoardComponent},
    {path: 'dish/:id', component : DishDetailsComponent},
    {path: '', redirectTo: 'dashboard', pathMatch : 'full'}
    ];