'use strict';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
};

React.render(<App />, document.getElementById('content'));
