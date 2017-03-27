import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Articles } from '../api/articles.js';
import Article from './Article';
import { browserHistory } from 'react-router';

// import MuiThemeProvider from '../material-ui/styles/MuiThemeProvider';

export class App extends Component {
	handleSubmit(event) {
		event.preventDefault();


		let article = {

			title: this.refs.title.value,
			subtitle: this.refs.subtitle.value,
			content: this.refs.content.value,
			tags: this.refs.tags.value,
			comments: this.refs.comments.value,
			createdAt: new Date(),
		}
		Meteor.call('insertArticle', article, (error) => {
			if(error) {
				alert("Oups something went wrong: " + error.reason);
			} else {
				ReactDOM.findDOMNode(this.refs.title).value = '';
				ReactDOM.findDOMNode(this.refs.subtitle).value = '';
				ReactDOM.findDOMNode(this.refs.content).value = '';
				ReactDOM.findDOMNode(this.refs.tags).value = '';
				ReactDOM.findDOMNode(this.refs.comments).value = '';
				alert('shit added');

				browserHistory.push('/');
			}
		})

	}



	renderArticles() {
		return this.props.articles.map((article) => (
			<Article key={article._id} article={article}/>
			))
	}
	render() {
		return(
			<div className="container">
				<h2>Astro Ant Articles</h2>
				<ul className="row right">
					<p className="col s12 m2"> meow </p>
				</ul>

				<ul className="row">
					{this.renderArticles()}
				</ul>

				<form className="new-Article" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="title" placeholder="title of article"/>
					<input type="text" ref="subtitle" placeholder="subtitle of article"/>
					<input type="text" ref="content" placeholder="content"/>
					<input type="text" ref="tags" placeholder="tags"/>
					<input type="text" ref="comments" placeholder="comments"/>
					<button className="btn-floating btn-large waves-effect waves-light red" type="submit" name="action"><i className="material-icons">+</i></button>
				</form>
				</div>
			)
	}
}

App.propTypes = {
	articles: PropTypes.array.isRequired,
};

export default createContainer(() => {
	return {
		articles: Articles.find({}, {sort:{ createdAt:-1}}).fetch(),
	};
}, App )