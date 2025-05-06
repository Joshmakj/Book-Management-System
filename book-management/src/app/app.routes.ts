import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },  // Default route to list books
  { path: 'create', component: BookCreateComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: 'view/:id', component: BookDetailComponent }
];
