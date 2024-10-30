import { z } from 'zod'
import { createFileRoute, redirect } from '@tanstack/react-router'

import { Input } from '@/components/ui/input'

interface SearchParams {
  query: string
}

const searchParamsSchema = z.object({
  query: z.string().optional(),
})

export const Route = createFileRoute('/search')({
  component: Search,
  validateSearch: (searchParams: SearchParams) =>
    searchParamsSchema.parse(searchParams),
  beforeLoad: ({ context }) => {
    if (!context.user?.id) {
      throw redirect({
        to: '/',
      })
    }
  },
})

function Search() {
  const { query } = Route.useSearch()
  const navigate = Route.useNavigate()

  return (
    <div className="p-2">
      <h2>Search</h2>
      <div className="grid gap-2">
        <p>Query: {query}</p>
        <Input
          defaultValue={query}
          placeholder="Search"
          onChange={(e) =>
            navigate({
              search: (search: Record<string, unknown>) => ({
                ...search,
                query: e.target.value,
              }),
            })
          }
        />
      </div>
    </div>
  )
}
