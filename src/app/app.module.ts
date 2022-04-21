import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ModalComponent } from './modal/modal.component';
import { ModalTestComponent } from './modal-test/modal-test.component';
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
  {
    path: 'modal-test',
    component: ModalTestComponent,
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
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    ModalComponent,
    ModalTestComponent,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
