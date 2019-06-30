import React, { Component } from 'react';
import './searchSection.css';

export default class SearchSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataReceived: [],
            keyword: ""
        }
    }
    
    searchTextChanged(keyword) {
        this.setState({
            keyword
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const keyword = encodeURI(this.state.keyword);
        const url = `https://www.googleapis.com/books/v1/volumes?fields=items(volumeInfo,saleInfo)&key=AIzaSyCk-hHiI2WCXQ5ilT_QKV2fd0O_K1RYXHM&q=${keyword}&maxResults=40`
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, options)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong!')
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    dataReceived: data.items,
                })
            })
            .then(() => {
                this.props.showBookList(this.state.dataReceived)
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
        }

    render() {
        return (
            <div className="searchsection">
                <form className="searchsection__form"
                     onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search">Search: </label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="type in search text here" 
                        value={this.state.keyword}
                        onChange={e => this.searchTextChanged(e.target.value)}/>
                    <span></span>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}