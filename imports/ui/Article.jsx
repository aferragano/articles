import React, { Component, PropTypes } from 'react';
import { Articles } from '../api/articles';
import { FullArticle } from '../api/articles';
import { Link } from 'react-router-dom'


export default class Article extends Component {
	deleteThisArticle(){
		Articles.remove(this.props.article._id)
	}
	render() {
		return (
			<li className="col s4 "> 
				<div className="row">
	        
	          <div className="card ">
	            <div className="card-content ">
	              <span className="card-title">{this.props.article.title}</span>
	              <p className="subtitle" >{this.props.article.subtitle}</p>
	              <p className="content" >{this.props.article.content}<a>...</a></p>
	              <p className="date"  >{this.props.article.createdAt.toString().slice(0, 10)} </p>
	            </div>
	            <div className="card-action">

	              <Link className="fullArticleLink" to={{	pathname: '/fullArticle/:id'}} >full article</Link>
	              <br/>
	              <a href="#"className="editArticle" ><i className="delete small material-icons">mode_edit</i></a>
	              <a href="#"className="deleteArticle" ><i className="delete small material-icons" onClick={this.deleteThisArticle.bind(this)}>delete</i></a>
	            </div>
	        </div>
	      </div>
			</li>
			);
	}
}

Article.propTypes = {
	article: PropTypes.object.isRequired,
};