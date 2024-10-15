import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function LoginPageComponents() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log( { email, password })
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="p-8  md:w-[400px] bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 space-y-2">
            <label htmlFor="email">Email Address</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="example@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 space-y-2">
            <label htmlFor="password">Password</label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6 gap-3">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-secondary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/80 text-white">
            Log In
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-secondary hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}