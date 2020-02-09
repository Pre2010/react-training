import React from "react";
import ReactDOM from "react-dom";

import {TestComponent} from './component/testComponent'
import axios from 'axios'

// React Hooks

export default function Root() {
  axios.defaults.baseURL = 'http://localhost:3000'
  return (
    <div>
      <h1>React Training Application</h1>
      <TestComponent/>
    </div>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));

