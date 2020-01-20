import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import AuthPage from './pages/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Route path="/" component={null} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/events" component={null} />
            <Route path="/bookings" component={null} />
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
