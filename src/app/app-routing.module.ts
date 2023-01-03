import { AuthButtonComponent } from './auth-button/auth-button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveyorComponent } from './conveyor/conveyor.component';

const routes: Routes = [
  
{ path: '', redirectTo: 'app', pathMatch: 'full'},
{ path: 'conveyor', component: ConveyorComponent },
{ path: 'login', component: AuthButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
