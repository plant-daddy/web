import type { Component } from 'solid-js'

import { Input } from '../../components/global'
import { Button } from '../../components/global/Button'
import { useAuth } from '../../contexts/auth'

export const SignIn: Component = () => {
  const { signIn } = useAuth()

  return (
    <form class="flex flex-col items-center justify-center gap-4 px-8 py-12 bg-green-800 rounded-xl w-1/3">
      <h1 class="text-2xl font-bold mb-6">Sign In</h1>
      <Input name="email" label="Email" required />
      <Input type="password" name="password" label="Password" required />
      <Button
        class="bg-green-300 w-full"
        onClick={async () => {
          await signIn({ email: 'a', password: 'a' })
        }}>
        Sign in
      </Button>
    </form>
  )
}
