import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrumMachineComponent } from './modules/drum-machine/drum-machine.component';

const routes: Routes = [
  {
    path: '',
    component: DrumMachineComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // required to work in github-pages
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
