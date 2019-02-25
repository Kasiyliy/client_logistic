import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GstAddComponent} from './gst-add/gst-add.component';
import {GstGetComponent} from './gst-get/gst-get.component';
import {GstEditComponent} from './gst-edit/gst-edit.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {StorageService} from './services/storage.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
