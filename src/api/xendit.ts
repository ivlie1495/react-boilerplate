const xenditApiUrl = import.meta.env.VITE_API_URL

export const getInvoiceList = async () => {
  const response = await fetch(`${xenditApiUrl}/xendit-get-invoice-list`)
  const data = await response.json()
  return data
}

interface InvoiceBody {
  amount: number
  payment_method: string
}

export const createInvoice = async (body: InvoiceBody) => {
  const response = await fetch(`${xenditApiUrl}/xendit-create-invoice`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  const data = await response.json()
  return data
}
