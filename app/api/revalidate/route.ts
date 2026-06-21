import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sanity-secret') || req.nextUrl.searchParams.get('secret')
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET

  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  const paths = ['/', '/news', '/programs', '/data-reports']
  paths.forEach(p => revalidatePath(p))

  return NextResponse.json({ revalidated: true })
}
