import { RedirectToSignIn, useUser } from '@clerk/clerk-react'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import './index.css'

// Create a new router instance
const router = createRouter({
  routeTree,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const { isLoaded, user } = useUser()

  if (!isLoaded) {
    return null
  }

  if (isLoaded && !user?.id) {
    return <RedirectToSignIn />
  }

  return <RouterProvider router={router} context={{ user: { id: user.id } }} />
}

export default App
