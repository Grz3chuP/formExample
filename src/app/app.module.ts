import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { SideSectionComponent } from './side-section/side-section.component';


@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    BottomSectionComponent,
    SideSectionComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
