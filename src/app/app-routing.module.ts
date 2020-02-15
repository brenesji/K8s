import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AccessRequestComponent } from './access-request/access-request.component';
import { CurrencyComponent } from './currency/currency.component';
import { DirectiveComponent } from './directive/directive.component';
//import { TimezoneComponent } from './timezone/timezone.component';
//import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [

  {path: 'main', component: InicioComponent},
  //{path: 'employees', component: EmployeeListComponent},
  {path: 'request', component: AccessRequestComponent},
  
  {path: 'currency', component: CurrencyComponent},
  {path: 'info', component: DirectiveComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InicioComponent, AccessRequestComponent, CurrencyComponent, DirectiveComponent]//, EmployeeListComponent, AccessRequestComponent, WeatherComponent]