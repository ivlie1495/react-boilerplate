import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  loader: () => 'Hello from About Loader!',
  beforeLoad: ({ context }) => {
    if (!context.user?.id) {
      throw redirect({
        to: '/',
      })
    }
  },
})
