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
				<div className="row">
				<h1 className="col s4">Articles</h1>
				</div>

				<ul>
					{this.renderArticles()}
				</ul>

				<form className="new-Article" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="title" placeholder="title of article"/>
					<input type="text" ref="subtitle" placeholder="subtitle of article"/>
					<input type="text" ref="content" placeholder="content"/>
					<input type="text" ref="tags" placeholder="tags"/>
					<input type="text" ref="comments" placeholder="comments"/>
					
					<a type="submit" name="action" className="btn-floating btn-large waves-effect waves-light red" ><i className="material-icons" >add</i></a>
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