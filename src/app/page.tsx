'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="text-center z-10 max-w-5xl mx-auto">
          <p className="text-[#8DFFE0] font-semibold mb-4 tracking-wider uppercase">Achzod Coaching</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">AUDIT MÉTABOLIQUE</span>
            <br />
            <span className="text-white">COMPLET</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvre ton <span className="text-[#8DFFE0] font-bold">potentiel inexploité</span> en 5 minutes.
            <br />
            Rapport personnalisé généré par IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/audit-complet" className="btn-primary pulse-glow">
              🚀 Commencer l'audit GRATUIT
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="stat-number">5K+</div>
              <div className="text-gray-400 text-sm">Transformations</div>
            </div>
            <div className="text-center">
              <div className="stat-number">98%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="stat-number">11</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Choisis ton <span className="gradient-text">Audit</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Gratuit pour découvrir, Premium pour transformer
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gratuit */}
            <div className="card">
              <div className="text-[#8DFFE0] font-semibold mb-2">GRATUIT</div>
              <div className="text-4xl font-bold mb-4">0€</div>
              <p className="text-gray-400 mb-6">Aperçu de ton potentiel</p>
              <ul className="space-y-3 mb-8">
                {['Analyse de base', 'Score métabolique', 'Top 3 priorités', '4 sections'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-[#8DFFE0] mr-3">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/audit-complet" className="block text-center py-3 px-6 border-2 border-[#8DFFE0] text-[#8DFFE0] rounded-xl font-bold hover:bg-[#8DFFE0]/10 hover:scale-[1.02] transition-all duration-300">
                Commencer gratuitement
              </Link>
            </div>
            
            {/* Premium */}
            <div className="card relative overflow-hidden" style={{borderColor: 'rgba(153, 144, 234, 0.5)'}}>
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#8DFFE0] to-[#9990EA] text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
                RECOMMANDÉ
              </div>
              <div className="text-[#9990EA] font-semibold mb-2">PREMIUM</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gray-500 line-through text-xl">147€</span>
                <span className="text-4xl font-bold">79€</span>
              </div>
              <p className="text-gray-400 mb-6">Transformation complète</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Analyse complète 15 sections',
                  'Feuille de route personnalisée',
                  'Projection 30/60/90 jours',
                  'Protocoles détaillés',
                  'Support prioritaire'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-[#9990EA] mr-3">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/audit-complet?premium=true" className="btn-primary block text-center">
                Débloquer mon potentiel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ce que tu vas <span className="gradient-text">découvrir</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔬', title: 'Analyse Métabolique', desc: 'Comprends comment ton corps brûle les calories et stocke l\'énergie' },
              { icon: '🧬', title: 'Profil Hormonal', desc: 'Identifie les déséquilibres qui freinent ta progression' },
              { icon: '🎯', title: 'Plan d\'Action', desc: 'Reçois un protocole personnalisé étape par étape' },
            ].map((feature, i) => (
              <div key={i} className="card text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ils ont <span className="gradient-text">transformé</span> leur vie
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Thomas M.', result: '-12kg en 3 mois', text: 'L\'audit m\'a ouvert les yeux sur mes erreurs. Les conseils sont ultra précis.' },
              { name: 'Sarah L.', result: '+40% énergie', text: 'Je comprends enfin pourquoi je stagnais. Le rapport est une mine d\'or.' },
            ].map((t, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8DFFE0] to-[#9990EA] flex items-center justify-center font-bold text-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-[#8DFFE0] text-sm">{t.result}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à découvrir ton <span className="gradient-text">potentiel</span> ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            5 minutes. 40 questions. Des réponses qui changent tout.
          </p>
          <Link href="/audit-complet" className="btn-primary text-xl pulse-glow">
            🚀 Commencer maintenant — C'est gratuit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2024 Achzod Coaching. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
