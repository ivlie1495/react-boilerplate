import { createFileRoute, Link } from '@tanstack/react-router'

import { getPokemonList } from '@/api/pokemon'

export const Route = createFileRoute('/pokemon/')({
  component: PokemonList,
  loader: getPokemonList,
})

function PokemonList() {
  const results = Route.useLoaderData()

  return (
    <div className="p-2">
      <h2>Pokemons</h2>
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
