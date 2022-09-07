import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HOMEComponent } from './home/home.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [BrowserModule, FormsModule, CKEditorModule],
  declarations: [AppComponent, HelloComponent, HOMEComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
