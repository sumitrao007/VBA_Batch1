import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { StudentComponent } from './student.component';
import { ManualcompComponent } from './manualcomp/manualcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    ManualcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
