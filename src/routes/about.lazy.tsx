import { createLazyFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const data = useLoaderData({ from: '/about' })

  return <div className="p-2">{data}</div>
}
