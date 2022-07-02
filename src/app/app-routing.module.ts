import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // Public routes
  // { path: 'login', component: LoginComponent },

  // Private routes
  { path: 'app', component: AppComponent /*, canActivate: [AuthGuard]*/ },

  { path: '**', redirectTo: 'app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
