import React, { Component } from 'react';

import Article from './Article';

export default class App extends Component {
	getArticles() {
		return [
			{ _id: 1, title: "this is article one"},
			{ _id: 2, title: "this is article two"},
			{ _id: 3, title: "this is article three"},
		];
	}
	renderArticles() {
		return this.getArticles().map((article) => (
			<Article key={article._id} article={article} />
			));
	}
	render() {
		return(
			<div className="container">
				<h1>Articles Bitches</h1>

				<ul>
					{this.renderArticles()}
				</ul>
				</div>
			)
	}
}