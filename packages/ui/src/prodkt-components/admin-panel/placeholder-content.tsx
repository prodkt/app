/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import { Card, CardContent } from '@/primitives/card'

/**
 *
 */
export default function PlaceholderContent() {
  return (
    <Card className='mt-6 rounded-lg border-none'>
      <CardContent className='p-6'>
        <div className='flex min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)] items-center justify-center'>
          <div className='relative flex flex-col'>
            <div className='absolute -bottom-8 right-0'></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
