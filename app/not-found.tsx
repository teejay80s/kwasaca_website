import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-12 bg-white">
      <div className="text-center">
        <div className="font-serif text-[120px] font-bold text-gray-100 leading-none mb-4">404</div>
        <h1 className="font-serif text-3xl font-semibold text-ink mb-3">Page Not Found</h1>
        <p className="text-gray-400 font-light mb-8 max-w-md mx-auto">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn-green inline-flex items-center gap-2 text-sm rounded-lg px-6 py-3">
          ← Return to Homepage
        </Link>
      </div>
    </div>
  )
}
