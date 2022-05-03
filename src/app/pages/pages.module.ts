import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { EditorialComponent } from './editorial/editorial.component';
import { AutorComponent } from './autor/autor.component';



@NgModule({
  declarations: [
    BookComponent,
    EditorialComponent,
    AutorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
