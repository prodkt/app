import { Button } from '@prodkt/ui/primitives/button'
import { Input } from '@prodkt/ui/primitives/input'
import { Label } from '@prodkt/ui/primitives/label'

/**
 *
 */
export function RegisterSection() {
  return (
    <div className='flex h-[var(--mainHeight)] w-full flex-row lg:grid lg:min-h-[600px] lg:grid-cols-2'>
      <div className='flex w-full items-center justify-center p-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-8 text-left'>
            <a href='/' aria-label='Prodkt Login' className='w-auto'>
              {/* <Logomark className="h-10 sm:hidden" /> */}
              {/* <Logo className="hidden h-10 sm:block" /> */}
            </a>
            <h1 className='text-3xl font-medium'>Create Account</h1>
            <p className='text-balance text-muted-foreground'>
              Register below to access exclusive content and downlaods
            </p>
          </div>
          <form action='/auth/register' method='post' className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='bryan.funk@prodkt.cloud'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <a
                  href='/forgot-password'
                  className='ml-auto inline-block text-sm underline'
                >
                  Forgot your password?
                </a>
              </div>
              <Input id='password' name='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Sign up
            </Button>
            <Button className='w-full'>Sign up with Google</Button>
          </form>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <a href='/signup' className='underline'>
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className='relative hidden lg:block'>
        <div className='z-[1] flex size-full flex-row items-center justify-center'>
          <div className='flex flex-col gap-2'>
            <a href='/' aria-label='Prodkt Login' className='w-auto'></a>
            <p className='text-center text-sm text-muted-foreground'>
              A portfolio platform from Bryan Funk
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
