import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { StudentComponent } from './student.component';
import { ManualcompComponent } from './manualcomp/manualcomp.component';
import { TestComponent } from './test1.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    ManualcompComponent,
    TestComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    Eventbinding2Component,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
