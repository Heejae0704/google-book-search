import React, { Component } from 'react';
import './bookTypeFilter.css';

export default class BookTypeFilter extends Component {
    render () {
        return (
            <div className="booktypefilter">
                <form className="booktypefilter__form">
                    <label htmlFor="booktype">Print Type:</label>
                    <span />
                    <select id="booktype" name="booktype"
                        onChange={e => this.props.applyBookTypeFilter(e.target.value)}>
                        <option value="all">Show all book types</option>
                        <option value="paid-ebooks">Show paid ebooks only</option>
                        <option value="free-ebooks">Show free ebooks only</option>
                    </select>
                </form>
            </div>
        )
    }
}