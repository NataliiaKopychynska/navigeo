// src/App.tsx
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { meThunk } from './redux/auth/authThunk'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { setUser } from './redux/auth/authSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user')
    if (userFromStorage) {
      dispatch(setUser(JSON.parse(userFromStorage)))
    }

    dispatch(meThunk() as any)
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
