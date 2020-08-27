import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
<<<<<<< HEAD
        path: 'page',
=======
        path: '',
        loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'book/:id',
>>>>>>> book-page
        loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
      },
      {
        path: '**',
        redirectTo: 'page/1',
      },
    ],
  },
  {
    path: 'authors',
    children: [
      {
        path: 'page',
        loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule),
      },
      {
        path: '**',
        redirectTo: 'page/1',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'books/page/1',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
