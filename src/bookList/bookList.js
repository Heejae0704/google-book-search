import React, { Component } from 'react';
import './bookList.css';
import BookItem from '../bookItem/bookItem'

export default class BookList extends Component {
    render () {
        const book = this.props.bookdata
                        .filter(book => {
                            if (this.props.printTypeFilter ==='all') {
                                return book
                            } else {return this.props.printTypeFilter === book.volumeInfo.printType}
                        })
                        .filter(book => {
                            if (this.props.bookTypeFilter === 'all') {
                                return book;
                            } else if (this.props.bookTypeFilter === 'paid-ebooks') {
                                return book.saleInfo.isEbook && !(book.saleInfo.saleability === 'FREE');
                            } else if (this.props.bookTypeFilter === 'free-ebooks') {
                                return book.saleInfo.isEbook && book.saleInfo.saleability === 'FREE';
                            } else {return book}
                        })
                        .map((book,index) => {
                            return (
                                <BookItem key={index} bookdata={book} />
                            )
                        })
        return (
            <div className="booklist">
                {book}
            </div>
        )
    }
}


        // const booklist = this.props.bookdata.map((bookitem,i) => {
        //     console.log(bookitem.volumeInfo.authors)
        //     const authorName = bookitem.volumeInfo.authors.map((author, ai) => {
        //         return (<p key={ai}>{author}</p>)
        //     })
        //     return (
        //         <div key={i}>
        //         <p>{bookitem.volumeInfo.title}</p>
        //         <div>{authorName}</div>
        //         <p>{bookitem.volumeInfo.description}</p>
        //         </div>
        //     )
        // })

        // return (
        //     <div className="booksearchapp">
        //         {booklist}
        //     </div>
        // )