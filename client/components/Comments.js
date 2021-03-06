import React, { Component } from 'react'

export default class Comments extends Component {
	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.username}</strong>
					{comment.text}
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		)
	}
	handleSubmit(e) {
		e.preventDefault();
    const postId = this.props.params.postId
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    console.log(postId, author, comment)
	}
	render() {
		return (
			<div className="comments">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
}
