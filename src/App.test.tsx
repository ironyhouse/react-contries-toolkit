import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renders Hello World string', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )

  expect(screen.getByText(/Where is the world/i)).toBeInTheDocument()
})
