import React, { Component } from 'react';
import unsplash from '../apis/unsplash';

import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends Component {
	state = {
		images: [],
	};

	onSearchSubmit = async term => {
		const res = await unsplash.get('/search/photos/', {
			params: { query: term },
		});
		this.setState({ images: res.data.results });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
