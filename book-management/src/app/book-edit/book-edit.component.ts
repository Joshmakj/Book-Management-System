import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: any = {
    title: '',
    author: '',
    genre: '',
    price: 0
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook() {
    const titleFilled = this.book.title?.trim() !== '';
    const authorFilled = this.book.author?.trim() !== '';
    const genreFilled = this.book.genre?.trim() !== '';
    const priceFilled = this.book.price !== null && this.book.price > 0;
  
    const totalFilled =
      (titleFilled ? 1 : 0) +
      (authorFilled ? 1 : 0) +
      (genreFilled ? 1 : 0) +
      (priceFilled ? 1 : 0);
  

    if (totalFilled === 0) {
      alert('Please fill out all fields.');
      return;
    }
  
    
    if (totalFilled === 3) {
      if (!titleFilled) {
        alert('Title is required.');
      } else if (!authorFilled) {
        alert('Author is required.');
      } else if (!genreFilled) {
        alert('Genre is required.');
      } else if (!priceFilled) {
        alert('Price is required.');
      }
      return;
    }
 
    if (totalFilled === 1 || totalFilled === 2) {
      alert('Please fill out all fields.');
      return;
    }
  
   
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      alert('Book updated successfully!');
      this.router.navigate(['/']);
    });
  }
  
}
