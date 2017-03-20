import { Meteor } from 'meteor/meteor';
import { Articles } from '../imports/api/articles';

Meteor.methods({
  insertArticle(article) {
    Articles.insert(article);
  },

  updateArticle(article) {
    Articles.update(article._id,
    { $set: article});
  },

  deleteArticle(articleId) {
    Articles.remove(articleId);
  }
});
