'use client'

import { Button } from '@prodkt/ui/primitives/button'
import { useToast } from '@prodkt/ui/primitives/toast'

export const ShowToast = () => {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: 'Hello, World!',
          description: 'This is a toast message.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
