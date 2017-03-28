import { Mongo } from 'meteor/mongo';
 
export const Comments = new Mongo.Collection('comments');

const CommentSchema = new SimpleSchema({
	content: {type: String},
	userName: {type: String},
	createdAt: {type: Date},
});

Comments.attachSchema(CommentSchema);