import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksService } from './core/books.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookCardComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    BooksService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
