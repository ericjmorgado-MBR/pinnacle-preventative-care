import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-pinnacle-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-semibold text-xl">Pinnacle Preventative Care</div>
        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}