import { createFileRoute } from '@tanstack/react-router'

import { getInvoiceList } from '@/api/xendit'

export const Route = createFileRoute('/')({
  loader: getInvoiceList,
})
