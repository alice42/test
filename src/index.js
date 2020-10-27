import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import mainReducer from './reducers/mainReducer'
import rootSaga from './sagas/rootSaga'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles'
import './i18n'
import App from './containers/App'
import { ThemeProvider } from './containers/theme-context'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline />
      <StylesProvider injectFirst>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
