import MediaForm from './pages/Form/MediaForm'
import Header from './components/Header/Header'
import CreateAds from './pages/CreateAds/CreateAds'
import Dashboard from './pages/Dashboard/Dashboard'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import TextForm from './pages/Form/TextForm'

const Layout = () => {
  return (
    <div className='app'>
     <Header />
     <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "create",
        element: <CreateAds />,  
      }, 
      {
        path: "/media-form",
        element: <MediaForm />
      },
      {
        path: "/text-form",
        element: <TextForm />
      },
      
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
