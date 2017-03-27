import { Mongo } from 'meteor/mongo';
 
export const Articles = new Mongo.Collection('articles');

const ArticleSchema = new SimpleSchema({
	title: {type: String},
	subtitle: {type: String},
	content: {type: String},
	tags: {type: String},
	comments: {type: String},
	
});

Articles.attachSchema(ArticleSchema);

