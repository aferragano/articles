import React, { Component, PropTypes } from 'react';
import { Articles } from '../api/articles';
import { Link } from 'react-router-dom'


export default class FullArticle extends Component {
	deleteThisArticle(){
		Articles.remove(this.props.article._id)
	}
	render() {
		return (
			<div>
			MERP
			<p>ass abg</p>
			</div>
			);
	}
}

FullArticle.propTypes = {
	fullArticle: PropTypes.object.isRequired,
};