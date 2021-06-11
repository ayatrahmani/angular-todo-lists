import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'penless-todo',
    loadChildren:() => import('./penless-todo/penless-todo.module').then(m=>m.PenlessTodoModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/penless-todo'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
