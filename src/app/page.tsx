export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{color: '#8DFFE0'}}>
          AUDIT MÉTABOLIQUE
        </h1>
        <p className="text-2xl mb-8">Achzod Coaching</p>
        <a 
          href="/audit-complet" 
          className="bg-gradient-to-r from-[#8DFFE0] to-[#9990EA] text-black px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition inline-block"
        >
          Commencer l'audit
        </a>
      </div>
    </div>
  )
}

