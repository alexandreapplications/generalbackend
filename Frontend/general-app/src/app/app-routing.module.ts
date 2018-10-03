import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './modules/core/notfound/notfound.component';

const routes: Routes = [
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: '', loadChildren: './modules/landing/landing.module#LandingModule' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
