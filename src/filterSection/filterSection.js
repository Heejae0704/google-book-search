import React, { Component } from 'react';
import './filterSection.css';
import PrintTypeFilter from '../printTypeFilter/printTypeFilter';
import BookTypeFilter from '../bookTypeFilter/bookTypeFilter';

export default class FilterSection extends Component {
    render () {
        return (
            <div className="filtersection">
                <PrintTypeFilter
                    bookdata={this.props.bookdata} 
                    applyPrintTypeFilter={this.props.applyPrintTypeFilter}/>
                <span />
                <BookTypeFilter
                    bookdata={this.props.bookdata}
                    applyBookTypeFilter={this.props.applyBookTypeFilter} />
            </div>
        )
    }
}