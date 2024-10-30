import { createFileRoute, redirect } from '@tanstack/react-router'

import { getPokemon } from '@/api/pokemon'

export const Route = createFileRoute('/pokemon/$id')({
  component: PokemonDetail,
  loader: async ({ params }) => await getPokemon(params.id),
  beforeLoad: ({ context }) => {
    if (!context.user?.id) {
      throw redirect({
        to: '/',
      })
    }
  },
})

function PokemonDetail() {
  const { id } = Route.useParams()
  const data = Route.useLoaderData()

  return (
    <div className="p-2">
      <h2>
        Pokemon ({id}) {data.name}
      </h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <dl>
        <dt>Height</dt>
        <dd>{data.height}</dd>
        <dt>Weight</dt>
        <dd>{data.weight}</dd>
      </dl>
    </div>
  )
}
