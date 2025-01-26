import React, {Component} from 'react';
import './Header.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={books : [
            {
              id: 1,
              title:"مقدمة ابن خلدون ",
              author: "ابن خلدون ",
              isbn: "1289499030"
            },
            {
              id: 2,
              title :"الحاوي في الطب ",
              author: "ابو بكر الرازي ",
              isbn : "893847239479"
            },
            {
              id: 3,
              title :"الحاوي في الطب ",
              author: "ابو بكر الرازي ",
              isbn : "893847239479"
            },
            {
              id: 4,
              title :"الحاوي في الطب ",
              author: "ابو بكر الرازي ",
              isbn : "893847239479"
            },
            {
                id: 5,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 6,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 7,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 8,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 9,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 10,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 11,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
            },
            {
                id: 12,
                title:"مقدمة ابن خلدون ",
                author: "ابن خلدون ",
                isbn: "1289499030"
              }
    ]};
    }


    render() {

        return (
           <div class="books-container">
                {this.state.books.map( (book) =>(
                    <div key={book.id} className="book-card">
                    <h3>{book.title}</h3>
                    <p><strong>الكاتب:</strong> {book.author}</p>
                    <p><strong>الرقم التسلسلي:</strong> {book.isbn}</p>
                    <div class="book-id">{book.id}</div>
                  </div>
                ))}
           </div>
        );
    }
}

export default Main;