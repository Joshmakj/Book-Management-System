import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  private apiUrl = 'http://localhost:8080/books'; 

  constructor(private http: HttpClient) {}


  createBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }


  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  getBookById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  updateBook(id: number, book: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, book);
  }


  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
