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
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './Module'
    }).then((m) => {
      return m.HelloModule
    })
    // .catch(e => {
    //   return import('src/app/placeholder/placeholder.module').then(m => {m.PlaceholderModule})
    // })
    // loadChildren: () => import('mfa1/Module').then(m => m.HelloModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
