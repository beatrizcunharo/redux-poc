import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux' // Vai espalhar a store onde tem os reducers que vão controlar os estados globais
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <ToastContainer autoClose={3000}/>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
