import { useUser } from '@clerk/clerk-react'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import './index.css'

// Create a new router instance
const router = createRouter({
  routeTree,
})

function App() {
  const { isLoaded, user } = useUser()

  if (!isLoaded) {
    return null
  }

  return <RouterProvider router={router} context={{ user: { id: user?.id } }} />
}

export default App
