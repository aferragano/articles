import React, { Component } from 'react';

export default class Edit extends Component {

	editArticle(event) {
		event.preventDefault();

		let article = {
			_id: this.props.currentArticle._id,
			title: this.props.currentArticle.title,
			subtitle: this.props.currentArticle.subtitle,
			content: this.props.currentArticle.content,
			tags: this.props.currentArticle.tags,
			comments: this.props.currentArticle.comments,
			createdAt: new Date(),
		}
		Meteor.call('updateArticle', article, (error) => {
			if (error) {
				alert("whoops, the error is " + error.reason);

			} else {
				alert('article updated')
			}
		})
	}
	
}