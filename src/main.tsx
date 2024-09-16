import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import GlobalStyles from './components/global_style/index'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </StrictMode>
  </Provider>,
)
