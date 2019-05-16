import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellListComponentComponent } from './well-list-component/well-list-component.component';
import { AddWellComponentComponent } from './add-well-component/add-well-component.component';

@NgModule({
   declarations: [
      AppComponent,
      WellListComponentComponent,
      AddWellComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
