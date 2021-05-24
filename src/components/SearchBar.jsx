import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = {
		term: '',
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		return (
			<div className='ui segment' style={{ marginTop: '10px' }}>
				<form action='' className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor='imgSearch'>Image Search</label>
						<input
							type='text'
							id='imgSearch'
							placeholder='type something here...'
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}
