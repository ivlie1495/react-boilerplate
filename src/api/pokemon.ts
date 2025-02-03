interface PokemonDetail {
  id: string
  name: string
  height: number
  weight: number
  sprites: {
    front_default: string
  }
}

export const getPokemon = async (id: string): Promise<PokemonDetail> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()
  return data
}

export interface Pokemon {
  id: string
  name: string
}

export async function getPokemonList(): Promise<Pokemon[]> {
  console.log('test satu dua tiga')
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
  const data = (await response.json()) as {
    results: { name: string; url: string }[]
  }

  return data.results.map((r) => ({
    id: r.url.split('/').slice(-2, -1)[0],
    name: r.name,
  }))
}
