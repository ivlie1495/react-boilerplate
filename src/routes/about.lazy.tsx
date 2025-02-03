import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const data = Route.useLoaderData()

  // const { proceed, reset, status } = useBlocker()

  return (
    <div className="p-2">
      <div>{data}</div>
      {/* <Dialog open={status === 'blocked'}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={reset}>
              No
            </Button>
            <Button onClick={proceed}>Yes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
