import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'module',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      remoteName: 'mfa1',
      exposedModule: './Module'
    }).then((m) => {
      return m.HelloModule
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
