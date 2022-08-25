import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { TemplateComponent } from './form/template/template.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin/dashboard', component: DashboardComponent},
  { path: 'admin/dashboard/:id', component: DashboardComponent},
  { path: 'test', component: TestComponent},
  { path: 'home', component: HomeComponent},
  { path: 'form/template', component: TemplateComponent},
  { path: 'form/reactive', component: ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
