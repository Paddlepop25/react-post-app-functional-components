import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Photos from './components/Photos'
import EditPost from './components/EditPost'
import Count from './components/Count'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/editpost/:id' component={EditPost} />
      <Route exact path='/photos' component={Photos} />
      <Route exact path='/count' component={Count} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
