import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';
import EditArticle from '../imports/ui/EditArticle.jsx';
import Lost from '../imports/ui/Lost';
injectTapEventPlugin();
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
// Meteor.startup(() => {
// 	render((
// 		<Router history={browserHistory}>
// 			<Route path="/" component={App}/>
// 			<Route path="edit" component={EditArticle}/>
// 			<Route path="*" component={Lost}/>
// 		</Router>
// 		), document.getElementById('render-target'));
// })