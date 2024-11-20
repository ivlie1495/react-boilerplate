import { createFileRoute, Link, redirect } from '@tanstack/react-router'

import { getPokemonList, Pokemon } from '@/api/pokemon'

export const Route = createFileRoute('/pokemon/')({
  component: PokemonList,
  loader: getPokemonList,
  beforeLoad: ({ context }) => {
    if (!context.user?.id) {
      throw redirect({
        to: '/',
      })
    }
  },
})

function PokemonList() {
  const results = Route.useLoaderData() as Pokemon[]

  return (
    <div className="p-2">
      <h2>Pokemon List</h2>
      <ul>
        {results.map(({ id, name }) => (
          <li key={id} className="cursor-pointer">
            <Link to="/pokemon/$id" params={{ id }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
