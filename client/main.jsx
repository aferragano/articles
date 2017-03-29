import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//new stuff from react router

import {
  BrowserRouter as Router,
  Route,

  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import App from '../imports/ui/App.jsx';
import EditArticle from '../imports/ui/EditArticle.jsx';
import Lost from '../imports/ui/Lost';
import FullArticle from '../imports/ui/FullArticle';

injectTapEventPlugin();
// Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });
Meteor.startup(() => {
	render((
		<Router >
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/fullArticle/:id" component={FullArticle}/>

		</div>
		</Router>
		), document.getElementById('render-target'));
})