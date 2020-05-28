import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';
import { FiltroFechaPipe } from './services/pipes/filtro-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FiltroFechaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
