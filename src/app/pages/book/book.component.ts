import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  formHidden: boolean = false;
  books!: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.listBooks();
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
      console.log(this.books);
    });
  }
}
