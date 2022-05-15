import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './App'
import { rootReducer } from './redux/reducers/rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(app)