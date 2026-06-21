export default function LoadingSpinner({ fullScreen = true }: { fullScreen?: boolean }) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-green-light" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-base animate-spin" />
      </div>
      <div className="text-center">
        <p className="font-serif text-xl font-semibold text-green-base animate-pulse">KWASACA</p>
        <p className="text-xs text-gray-400 font-light mt-1">Loading...</p>
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {content}
      </div>
    )
  }

  return content
}
