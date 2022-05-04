import { EditorialService } from './../services/editorial.service';
import { AutorService } from './../services/autor.service';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  formHidden: boolean = false;
  books!: any;
  autores!: any;
  editoriales!: any;
  form!: FormGroup;

  constructor(
    private bookService: BookService,
    private autorService: AutorService,
    private editorialService: EditorialService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.listBooks();
    this.listAutor();
    this.listEditorial();
  }

  buildForm() {
    this.form = this.formbuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      gender: ['', Validators.required],
      numPage: ['', Validators.required],
      idAutor: [0, Validators.required],
      idEditorial: [0, Validators.required],
    });
  }

  showBook() {
    this.formHidden = true;
  }

  hideBook() {
    this.formHidden = false;
  }

  listBooks() {
    this.bookService.listBooks().subscribe((resp) => {
      this.books = resp;
    });
  }

  listAutor() {
    this.autorService.listAutor().subscribe((resp: any) => {
      this.autores = resp;
    });
  }

  listEditorial() {
    this.editorialService.listEditorial().subscribe((resp: any) => {
      this.editoriales = resp;
    });
  }

  saver() {
    if (this.form.valid) {
      let data = {
        title: this.form.get('title')?.value,
        year: this.form.get('year')?.value,
        gender: this.form.get('gender')?.value,
        numPage: this.form.get('numPage')?.value,
        idAutor: this.form.get('idAutor')?.value,
        idEditorial: this.form.get('idEditorial')?.value,
      };

      this.bookService.postBook(data).subscribe((resp: any) => {
        this.hideBook();
        this.listBooks();
      });
    }
  }
}
