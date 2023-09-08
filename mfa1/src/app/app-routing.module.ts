import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloModule } from './hello/hello.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'exported',
    component: HelloComponent
    //loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
