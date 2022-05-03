import { AutorComponent } from './pages/autor/autor.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { BookComponent } from './pages/book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'autor', component: AutorComponent },
  { path: '**', redirectTo: 'book' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
