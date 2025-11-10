import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold text-pinnacle-blue">About Us</h1>
        <p className="mt-4 text-gray-700">
          Coming soon! This is where you'll tell your story.
        </p>
      </main>
      <Footer />
    </div>
  )
}