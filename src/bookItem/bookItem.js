import React, { Component } from 'react';
import './bookItem.css';

export default class BookItem extends Component {
    substringIndicator(str) {
        if (str.length>300) {
            return "..."
        }
        else {
            return ""
        }
    }
    render () {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'KRW',
            minimumFractionDigits: 0
          })
        return (
            <div className="bookitem">
                <h2>{this.props.bookdata.volumeInfo.title}</h2>
                <div className="bookitem__details">
                    <div className="bookitem__details__bookcover">
                        <img src={this.props.bookdata.volumeInfo.imageLinks
                            ? this.props.bookdata.volumeInfo.imageLinks.thumbnail
                            : ""} alt="bookcover" />
                    </div>
                    <div className="bookitem__details__bookinfo">
                        <p className="authorandprice">{this.props.bookdata.volumeInfo.authors
                        ? "Author: " + this.props.bookdata.volumeInfo.authors[0]
                        : ""}<br/>
                        {this.props.bookdata.saleInfo.listPrice
                            ? "Price: " + formatter.format(this.props.bookdata.saleInfo.listPrice.amount) 
                            : ""} </p>
                        <p className="description">{this.props.bookdata.volumeInfo.description
                            ? this.props.bookdata.volumeInfo.description.substring(0,300) + this.substringIndicator(this.props.bookdata.volumeInfo.description)
                        : ""}</p>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}