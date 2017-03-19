import React, { Component, PropTypes } from 'react';

export default class Article extends Component {
	render() {
		return (
			<li> {this.props.article.title}</li>
			);
	}
}

Article.propTypes = {
	article: PropTypes.object.isRequired,
};