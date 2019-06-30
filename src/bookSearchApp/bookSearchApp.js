import React, { Component } from 'react';
import './bookSearchApp.css';
import SearchSection from '../searchSection/searchSection';
import FilterSection from '../filterSection/filterSection';
import BookList from '../bookList/bookList';

class BookSearchApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookdata: [
                
            ],
            printTypeFilter: "all",
            bookTypeFilter: "all"
        }
    }

    showBookList(bookList) {
        this.setState({
            bookdata: bookList
        })
    }

    applyPrintTypeFilter(value) {
        this.setState({
            printTypeFilter: value
        })
    }

    applyBookTypeFilter(value) {
        this.setState({
            bookTypeFilter: value
        })
    }
    
    render() {
        return (
            <div className="booksearchapp">
                <header className="booksearchapp__header">
                    <h1 className="booksearchapp__header__h1">Google Book Search</h1>
                </header>
                <SearchSection
                    bookdata={this.state.bookdata} 
                    showBookList={bookList => this.showBookList(bookList)}/>
                <FilterSection
                    bookdata={this.state.bookdata} 
                    applyPrintTypeFilter={value => this.applyPrintTypeFilter(value)} 
                    applyBookTypeFilter={value => this.applyBookTypeFilter(value)}/>
                {this.state.error}
                <BookList 
                    bookdata={this.state.bookdata}
                    printTypeFilter={this.state.printTypeFilter}
                    bookTypeFilter={this.state.bookTypeFilter} />
            </div>
        )

    }
}
export default BookSearchApp;
