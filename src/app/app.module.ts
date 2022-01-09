import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrincipalSectionComponent } from './components/principal-section/principal-section.component';
import { ImgSectionComponent } from './components/img-section/img-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalSectionComponent,
    ImgSectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
