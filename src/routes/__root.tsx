import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Header from '@/components/header'

interface RootContext {
  user?: { id?: string }
}

export const Route = createRootRouteWithContext<RootContext>()({
  component: Root,
})

function Root() {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
