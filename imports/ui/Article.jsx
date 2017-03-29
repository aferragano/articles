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
			<li className="col s12 m7 "> 
				<div className="row">
	        
	          <div className="card ">
	            <div className="card-content ">
	              <span className="card-title">{this.props.article.title}</span>
	              <p>{this.props.article.subtitle}</p>
	              <p>{this.props.article.content}<a>...</a></p>
	              <p>{this.props.article.createdAt.toString()} date</p>
	            </div>
	            <div className="card-action">
	              <a href="#"><i className="delete small material-icons">mode_edit</i></a>
	              <a href="#"><i className="delete small material-icons" onClick={this.deleteThisArticle.bind(this)}>delete</i></a>
	            {this.props.article._id}
	            </div>

	          <Link to="/fullArticle">gypsy</Link>
	          <Link to={{	pathname: '/fullArticle/:id'
	       
	        						}} >gyps8y</Link>
	        </div>
	      </div>
			</li>
			);
	}
}

Article.propTypes = {
	article: PropTypes.object.isRequired,
};