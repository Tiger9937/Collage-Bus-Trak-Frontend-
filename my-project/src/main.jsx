import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './store/Stored.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  Homepage,
  Login,
  Singup,
  ProfilePage,
  Rigstation,
  CollageRigster_page
  } from './pages/pageIndex.js'



  import { CookiesProvider } from 'react-cookie'; 






import Error from './utils/error/DevError.jsx'
import {Exparimant} from './components/index.jsx'
import {AuthLayout} from './components/index.jsx'

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
      path: "/login",
      element: (
          <AuthLayout authentication={false}>
              <Login />
          </AuthLayout>
      ),
  },
  {
      path: "/singup",
      element: (
          <AuthLayout authentication={false}>
              <Singup />
          </AuthLayout>
      ),
  },
        {
          path: "/error",
          element:(<Error/>)
        },
        {
          path: "/Exparimant",
          element:(
                  <Exparimant/>
        )
        },
        {
          path: "/BUS",
          element:(<Exparimant/>)
        },
        {
          path: "/profile",
          element:(
          <AuthLayout authentication>
            <ProfilePage/>
          </AuthLayout>  
        )
        },
        {
          path: "/studentRigster",
          element:(
                     <Rigstation/>
          )
        },
        {
          path: "/CollageRigster",
          element:(
                     <CollageRigster_page/>
          )
        }
        
    ],
},
])







createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CookiesProvider>
          <Provider store={store}>
          <RouterProvider router={router}/> 
          </Provider>
    </CookiesProvider>
  </StrictMode>,
)
