import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function signIn(formData: FormData) {
  'use server'

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    redirect('/auth/login?error=' + encodeURIComponent(error.message))
  }

  revalidatePath('/admin', 'layout')
  redirect('/admin')
}

export async function signOut() {
  'use server'

  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath('/auth/login', 'layout')
  redirect('/auth/login')
}
