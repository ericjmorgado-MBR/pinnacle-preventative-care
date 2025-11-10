import Header from '../components/Header'
import Footer from '../components/Footer'
import IntakeForm from '../components/IntakeForm'

export default function Home(){
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 flex-1">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-pinnacle-blue">We handle your home maintenance — so you don't have to.</h1>
            <p className="mt-4 text-gray-700">Pinnacle Preventative Care provides quarterly, scheduled maintenance for the small tasks homeowners forget — filters, vents, flushes, and more — so your home runs safer and longer.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Get your personalized maintenance quote</h2>
            <IntakeForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
