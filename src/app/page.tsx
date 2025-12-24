'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp, Star, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ============================================
          🌟 HERO SECTION ULTRA-PREMIUM
          ============================================ */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="container"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-badge"
          >
            <Zap className="inline w-4 h-4 mr-2" />
            5000+ Transformations Réussies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            AUDIT MÉTABOLIQUE
            <br />
            <span className="text-gradient">COMPLET</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Découvre ton <span className="text-gradient font-bold">potentiel inexploité</span> en 5 minutes.
            <br />
            Rapport personnalisé généré par <span className="text-gradient font-bold">IA avancée</span>, relu par coach certifié.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/audit-complet" className="btn-primary group w-full sm:w-auto">
              🚀 Commencer l'audit GRATUIT
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#plans" className="btn-secondary w-full sm:w-auto">
              Voir la version PREMIUM
            </Link>
          </motion.div>

          {/* STATS CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
          >
            {[
              { number: '5K+', label: 'Transformations', icon: TrendingUp },
              { number: '98%', label: 'Satisfaction', icon: Star },
              { number: '11', label: 'Certifications', icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="stat-card"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#8DFFE0]" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          💎 COMPARISON SECTION PREMIUM
          ============================================ */}
      <section className="py-20 relative" id="plans">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            <h2>Choisis ton <span className="text-gradient">Audit</span></h2>
            <p className="section-subtitle">Gratuit pour découvrir, Premium pour transformer</p>
          </motion.div>

          <div className="comparison-grid">
            {/* GRATUIT CARD */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="comparison-card"
            >
              <h3 className="text-2xl font-bold mb-2">GRATUIT</h3>
              <div className="price">0€</div>
              <p className="text-lg mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Aperçu de ton potentiel
              </p>
              <ul className="feature-list">
                <li>Analyse de base</li>
                <li>Score métabolique</li>
                <li>Top 3 priorités</li>
                <li>4 sections</li>
              </ul>
              <Link href="/audit-complet" className="btn-secondary w-full">
                Commencer gratuitement
              </Link>
            </motion.div>

            {/* PREMIUM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="comparison-card premium"
            >
              <h3 className="text-2xl font-bold mb-2">PREMIUM</h3>
              <div className="price">
                79€
                <span className="text-base font-normal ml-2" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  147€
                </span>
              </div>
              <p className="text-lg mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Transformation complète 15 sections
              </p>
              <ul className="feature-list">
                <li>Analyse complète 15 sections</li>
                <li>Feuille de route personnalisée</li>
                <li>Projection 30/60/90 jours</li>
                <li>Protocoles détaillés</li>
                <li>Support prioritaire</li>
              </ul>
              <Link href="/audit-complet" className="btn-primary w-full">
                Débloquer mon potentiel
                <Zap className="inline ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          🎯 CE QUE TU VAS DÉCOUVRIR
          ============================================ */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            <h2>Ce que tu vas <span className="text-gradient">découvrir</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔥',
                title: 'Analyse Métabolique',
                desc: 'Comprends comment ton corps brûle les calories et stocke l\'énergie',
              },
              {
                icon: '🧬',
                title: 'Profil Hormonal',
                desc: 'Identifie les déséquilibres qui freinent ta progression',
              },
              {
                icon: '💪',
                title: 'Protocole d\'Action',
                desc: 'Plan d\'action précis avec objectifs mesurables',
              },
              {
                icon: '📊',
                title: 'Projection 90 Jours',
                desc: 'Visualise ta transformation avec des étapes claires',
              },
              {
                icon: '🎯',
                title: 'Nutrition Optimisée',
                desc: 'Macros et timing personnalisés pour tes objectifs',
              },
              {
                icon: '⚡',
                title: 'Supplémentation',
                desc: 'Stack personnalisé basé sur tes carences réelles',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          🚀 FINAL CTA
          ============================================ */}
      <section className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="glass-card-premium text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Prêt à découvrir ton <span className="text-gradient">potentiel</span> ?</h2>
            <p className="text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              5 minutes. 40 questions. Des réponses qui changent tout.
            </p>
            <Link href="/audit-complet" className="btn-primary text-xl px-12 py-6">
              🚀 Commencer maintenant — C'est gratuit
              <ArrowRight className="inline ml-3 w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          © 2024 Achzod Coaching. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
