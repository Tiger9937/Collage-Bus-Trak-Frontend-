import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './store/Stored.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Homepage, Login,Singup} from './pages/pageIndex.js'
import Error from './utils/error/DevError.jsx'
import {Exparimant} from './components/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: (  <Homepage/> )
     },
        {
            path: "/singup",
            element: ( <Singup/> ),
        },
        {
          path: "/login",
          element:(<Login/>)
        },
        {
          path: "/error",
          element:(<Error/>)
        },
        {
          path: "/Exparimant",
          element:(<Exparimant/>)
        },
    ],
},
])







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/> 
    </Provider>
  </StrictMode>,
)
