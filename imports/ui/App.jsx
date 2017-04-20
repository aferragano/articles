import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Articles } from '../api/articles.js';

import Article from './Article';
import Edit from './EditArticle';
import { browserHistory, Link } from 'react-router';

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
			createdAt: Date.now(),
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

				// browserHistory.push('/');
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
			 <nav>
			    <div className="nav-wrapper col s12 m12">
			      <a href="#" className="brand-logo"><h4>Articles</h4></a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="https://dribbble.com/aferragano">dribble</a></li>
			        <li><a href="http://codepen.io/aferragano/">CodePen</a></li>
			        <li><a href="https://github.com/aferragano"></a>Github</li>
			      </ul>
			    </div>
		  	</nav>
				<div className="banner col s12 m12"> 
					<form>
		        <div className="input-field col s12 m12" >
		          <input type="search"/>
		          <label className="label-icon"><i className="material-icons">search</i></label>
		          <i className="material-icons">close</i>
		        </div>
		      </form> 
		    </div>	
				

				<ul className="row">
					{this.renderArticles()}
				</ul>
				<div className="container form container">
				<h5>Add article</h5>
					<form className="new-Article col s12 m3" onSubmit={this.handleSubmit.bind(this)}>
						<input type="text" ref="title" placeholder="title of article"/>
						<input type="text" ref="subtitle" placeholder="subtitle of article"/>
						<input type="text" ref="content" placeholder="content"/>
						<input type="text" ref="tags" placeholder="tags"/>
						<input type="text" ref="comments" placeholder="comments"/>
						<button className="btn-floating btn-medium waves-effect waves-light orange plusArticle" type="submit" name="action"><i className="material-icons plus">add</i></button>
					</form>
				</div>
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