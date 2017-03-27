import React, { Component, PropTypes } from 'react';
import { Articles } from '../api/articles';


export default class Article extends Component {
	deleteThisArticle(){
		Articles.remove(this.props.article._id)
	}
	render() {
		return (
			<li className="col s12 m7"> 
				<h3>{this.props.article.title}</h3>
				
				<br/>
				<h5>{this.props.article.subtitle}</h5>
				<p>
					{this.props.article.content}
					<a>...</a>
				</p>
				{this.props.article.createdAt}
				<i className="delete small material-icons">mode_edit</i>
				<i className="delete small material-icons" onClick={this.deleteThisArticle.bind(this)}>delete</i>
			</li>
			);
	}
}

Article.propTypes = {
	article: PropTypes.object.isRequired,
};