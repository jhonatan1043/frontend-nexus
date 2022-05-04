import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { EditorialComponent } from './editorial/editorial.component';
import { AutorComponent } from './autor/autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, EditorialComponent, AutorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PagesModule {}
