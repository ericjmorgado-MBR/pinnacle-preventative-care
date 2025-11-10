import { useState } from 'react'

export default function IntakeForm(){
  const [status, setStatus] = useState(null)

  const appliancesList = [
    'Range','Cooktop','Oven','Hood vent','Dishwasher','Refrigerator',
    'Washer','Dryer','Furnace','Condenser (AC)','Water heater'
  ]

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    const data = {}
    formData.forEach((value, key) => {
      if(key === 'appliances'){
        if(!data.appliances) data.appliances = []
        data.appliances.push(value)
      } else {
        data[key] = value
      }
    })

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SHEETS_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      const json = await res.json()
      if(res.ok && json.result==='success'){
        setStatus('success')
        e.target.reset()
        if(typeof window !== 'undefined' && window.gtag){
          window.gtag('event', 'lead_form_submitted', { method: 'website_form' })
        }
      } else {
        setStatus('error')
      }
    } catch(err){
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <input type="text" name="name" placeholder="Full Name" required className="block w-full border px-3 py-2"/>
      <input type="email" name="email" placeholder="Email" required className="block w-full border px-3 py-2"/>
      <input type="text" name="phone" placeholder="Phone" className="block w-full border px-3 py-2"/>
      <input type="text" name="address" placeholder="Address" className="block w-full border px-3 py-2"/>
      <input type="text" name="home_size" placeholder="Home size (sq ft)" required className="block w-full border px-3 py-2"/>

      <div>
        <label className="block font-medium">Appliances</label>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {appliancesList.map(a => (
            <label key={a} className="flex items-center">
              <input type="checkbox" name="appliances" value={a} className="mr-2"/> {a}
            </label>
          ))}
        </div>
      </div>

      <textarea name="models" rows="3" placeholder="Appliance model numbers (optional)" className="block w-full border px-3 py-2"></textarea>

      <button type="submit" className="bg-pinnacle-blue text-white px-6 py-2 rounded font-medium">Get my custom plan</button>
      <div>{status==='sending' ? 'Sending...' : status==='success' ? 'Thanks — we will contact you soon.' : status==='error' ? 'Error — please try again.' : ''}</div>
    </form>
  )
}
