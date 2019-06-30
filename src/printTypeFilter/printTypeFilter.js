import React, { Component } from 'react';
import './printTypeFilter.css';

export default class PrintTypeFilter extends Component {
    render () {
        return (
            <div className="printtypefilter">
                <form className="printtypefilter__form">
                    <label htmlFor="printtype">Print Type:</label>
                    <span />
                    <select id="printtype" name="printtype"
                        onChange={e => this.props.applyPrintTypeFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="MAGAZINE">Magazine</option>
                        <option value="BOOK">Book</option>
                    </select>
                </form>
            </div>
        )
    }
}