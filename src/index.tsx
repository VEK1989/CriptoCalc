import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import store from './redux/store'


const Global = createGlobalStyle`
*{  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: arial;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
