import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
<<<<<<< HEAD
=======
import { DetailsComponent } from './components/details/details.component';
import { CommaPipe } from './pipes/comma.pipe';
>>>>>>> book-page


@NgModule({
  declarations: [
    BooksComponent,
    DetailsComponent,
    CommaPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
  ],
  bootstrap: [],
})
export class BooksModule {

}
