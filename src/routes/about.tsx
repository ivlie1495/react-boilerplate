import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  loader: () => 'Hello from About Loader!',
})
