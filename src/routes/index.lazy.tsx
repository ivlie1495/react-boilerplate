import { useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

import { createInvoice } from '@/api/xendit'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'

interface VaList {
  key: string
  fee: {
    type: 'percentage' | 'fixed'
    value: number
  }
}

const vaList: VaList[] = [
  { key: 'BCA', fee: { type: 'fixed', value: 4000 } },
  { key: 'MANDIRI', fee: { type: 'fixed', value: 4000 } },
  { key: 'BNI', fee: { type: 'fixed', value: 4000 } },
  { key: 'BRI', fee: { type: 'fixed', value: 4000 } },
  { key: 'PERMATA', fee: { type: 'fixed', value: 4000 } },
  { key: 'QRIS', fee: { type: 'percentage', value: 0.07 } },
]

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const [payment, setPayment] = useState<VaList | null>(null)

  const amount = 100_000
  const fee = payment?.fee

  const feeTotal = fee
    ? fee.type === 'percentage'
      ? amount * fee.value
      : fee.value
    : 0

  const vat = feeTotal * 0.11

  const totalAmount = amount + feeTotal + vat

  const handlePay = async () => {
    const body = {
      amount: totalAmount,
      payment_method: payment?.key || '',
    }
    const data = await createInvoice(body)

    window.location = data.invoice_url
  }

  return (
    <div className="p-2">
      <div className="space-y-4">
        <Label className="pb-2">Amount: {amount}</Label>
        <RadioGroup
          onValueChange={(value) => setPayment(vaList[parseInt(value)])}
        >
          {vaList.map(({ key }, index) => (
            <div key={key} className="flex items-center space-x-2">
              <RadioGroupItem value={`${index}`} id={key} />
              <Label htmlFor={key}>{key}</Label>
            </div>
          ))}
        </RadioGroup>
        <div className="flex flex-col space-y-4">
          <Label>Fee: {feeTotal.toFixed(2)}</Label>
          <Label>VAT: {vat.toFixed(2)}</Label>
          <Label>Total Amount: {amount + feeTotal + vat}</Label>
        </div>
        <Button onClick={handlePay}>Pay</Button>
      </div>
    </div>
  )
}
