import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDataService } from './user-table/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
