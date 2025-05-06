import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  book = {
    title: '',
    author: '',
    genre: '',
    price: null
  };

  constructor(private bookService: BookService, private router: Router) {}
  createBook() {
    const titleFilled = this.book.title.trim() !== '';
    const authorFilled = this.book.author.trim() !== '';
    const genreFilled = this.book.genre.trim() !== '';
    const priceFilled = this.book.price !== null && this.book.price > 0;
  
    const totalFilled =
      (titleFilled ? 1 : 0) +
      (authorFilled ? 1 : 0) +
      (genreFilled ? 1 : 0) +
      (priceFilled ? 1 : 0);
  
    
    if (!authorFilled && titleFilled && genreFilled && priceFilled) {
      alert('Author is required.');
      return;
    }
  
   
    if (totalFilled === 1) {
      alert('Please fill out all fields.');
      return;
    }
  
   
    if (!titleFilled) {
      alert('Title is required.');
      return;
    }
  
    if (!authorFilled) {
      alert('Author is required.');
      return;
    }
  
    if (!genreFilled) {
      alert('Genre is required.');
      return;
    }
  
    if (!priceFilled) {
      alert('Price must be greater than 0.');
      return;
    }
  
 
    this.bookService.createBook(this.book).subscribe(() => {
      alert('Book created successfully!');
      this.router.navigate(['/']);
    });
  }
}
