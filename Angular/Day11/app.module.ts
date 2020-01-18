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
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './home/home.component';
import { HomechildComponent } from './homechild/homechild.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { Home1Component } from './home1/home1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SonglistComponent } from './songlist/songlist.component';
import { MyPipe } from './custompipe/mypipe.pipe';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { MyService } from './service-comp/course.service';

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
    TwowaybindingComponent,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchDirectiveComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    HomeComponent,
    HomechildComponent,
    MouseEventComponent,
    PipedemoComponent,
    CustompipeComponent,
    Home1Component,
    SidebarComponent,
    SonglistComponent,
    MyPipe,
    ServiceCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
