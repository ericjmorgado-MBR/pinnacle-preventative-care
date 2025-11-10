export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#0047AB' }}>Pinnacle Preventative Care</h1>
      <p>Quarterly home maintenance made easy. Keep your home safe, efficient, and stress-free.</p>
      <form style={{ display: 'grid', gap: '1rem', maxWidth: 400, margin: '2rem auto' }}>
        <input placeholder="Full Name" required />
        <input placeholder="Email" type="email" required />
        <input placeholder="Home Size (sqft)" required />
        <textarea placeholder="Appliance Model Numbers" rows="3" />
        <button style={{ background: '#FFD700', border: 'none', padding: '1rem', fontWeight: 'bold' }}>Submit</button>
      </form>
    </main>
  );
}