import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'test',
    component: TestComponent,
    outlet: 'dialog',
  },
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, TestComponent],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
