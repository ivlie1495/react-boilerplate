import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const data = Route.useLoaderData()

  return <div className="p-2">{data}</div>
}
