import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent} from './gst-add/gst-add.component';
import { GstEditComponent} from './gst-edit/gst-edit.component';
import { GstGetComponent} from './gst-get/gst-get.component';

const routes: Routes = [
  {
    path: 'storage/create',
    component: GstAddComponent
  },
  {
    path: 'storage/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'storage',
    component: GstGetComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
