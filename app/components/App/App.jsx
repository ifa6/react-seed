'use strict';

import './_App.scss';

import React from 'react';
<<<<<<< HEAD
import { RouteHandler } from 'react-router';
import NavigationStore from '../../stores/NavigationStore';
import Navigation from '../Navigation/Navigation';
=======
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
>>>>>>> master
import Footer from '../Footer/Footer';

function getState() {
  return {
    pages: NavigationStore.getAll()
  };
}

class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = getState();
  }

  render() {
    return (
      <div className={'app'}>
        <Navigation pages={this.state.pages} />
        <RouteHandler key={this.context.router.getCurrentPath()} />
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default App;
