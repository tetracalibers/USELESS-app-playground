import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import 'materialize-css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toggle/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'rc-slider/assets/index.css'
import 'react-datepicker/dist/react-datepicker.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
  document.getElementById('root')
)
