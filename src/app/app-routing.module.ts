import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';


const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonPageComponent
  },
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
