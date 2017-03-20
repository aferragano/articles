import React, { Component, PropTypes } from 'react';
import { Articles } from '../api/articles';


export default class Article extends Component {
	deleteThisArticle(){
		Articles.remove(this.props.article._id)
	}
	render() {
		return (
			<li className="col s12 m7"> {this.props.article.title}
			<button className="delete" onClick={this.deleteThisArticle.bind(this)}> X</button>
			<i className="large material-icons">insert_chart</i>
			<br/>
			{this.props.article.subtitle}
			{this.props.article.createdAt}
			</li>
			);
	}
}

Article.propTypes = {
	article: PropTypes.object.isRequired,
};