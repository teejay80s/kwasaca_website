import { signIn } from '@/app/auth/actions'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/admin')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="font-serif text-2xl font-bold text-ink">KWASACA Admin</h1>
            <p className="text-sm text-gray-400 font-light mt-1">Sign in to your account</p>
          </div>

          <form action={signIn} className="space-y-4">
            {searchParams?.error && (
              <div className="bg-red-pale border border-red-200 text-red-warm text-sm rounded-lg px-4 py-2.5">
                {searchParams.error === 'auth_failed' ? 'Authentication failed. Please try again.' : searchParams.error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-field w-full"
                placeholder="admin@kwasaca.kw.gov.ng"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium text-gray-500 mb-1.5">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field w-full"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="btn-green w-full text-sm rounded-lg px-6 py-3">
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 font-light mt-6">
            Authorized staff only
          </p>
        </div>
      </div>
    </div>
  )
}
