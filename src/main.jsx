import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js'
import { StoreProvider } from 'easy-peasy'
import store from './store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
)
