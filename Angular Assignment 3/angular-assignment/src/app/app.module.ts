import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/childcomponents/header/header.component';
import { ContainerDirective } from './components/directives/container.directive';
import { FooterComponent } from './components/childcomponents/footer/footer.component';
import { TableComponent } from './components/childcomponents/table/table.component';
import { TimeComponent } from './components/childcomponents/time/time.component';
import { DropdownComponent } from './components/childcomponents/dropdown/dropdown.component';
import { SpinnerComponent } from './components/childcomponents/spinner/spinner.component';
import { TextboxComponent } from './components/childcomponents/textbox/textbox.component';
import { ButtonComponent } from './components/childcomponents/button/button.component';
import { DividerComponent } from './components/childcomponents/divider/divider.component';
import { MaskComponent } from './components/childcomponents/mask/mask.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerDirective,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    TableComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent
  ]
})
export class AppModule { }
