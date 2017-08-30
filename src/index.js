import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#app'))
registerServiceWorker()
