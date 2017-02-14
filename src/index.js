// react
import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader';
// mui
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/main.scss';
import store from './store/configureStore'
import { isTokenValid, removeToken } from './helpers/auth'
import { getUserRequest } from './sagas/auth'
import Root from './containers/Root';

const history = syncHistoryWithStore(hashHistory, store)

injectTapEventPlugin();

class MuiComponent extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}


const getNodeHMR = (RootComponent) => {
  return (
    <AppContainer>
      <MuiComponent>
        <RootComponent store={store} history={history} />
      </MuiComponent>
    </AppContainer>
  );
}


const rootNode = (
  <MuiComponent>
    <Root store={store} history={history} />
  </MuiComponent>
)


const renderApp = (node) => {
  render(
    node,
    document.getElementById('root')
  )
}


if (isTokenValid()) {
  store.runSaga(getUserRequest).done.then(() => {
    renderApp(rootNode);
  })
} else {
  removeToken()
  renderApp(rootNode);
}


if (process.env.IS_DEVELOP && module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    renderApp(getNodeHMR(NextRoot));
  })
   module.hot.accept()
 }

