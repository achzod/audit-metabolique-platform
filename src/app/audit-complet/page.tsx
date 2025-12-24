'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  { id: 1, question: "Quel est ton objectif principal ?", options: ["Perte de poids", "Prise de muscle", "Plus d'énergie", "Meilleure santé"] },
  { id: 2, question: "Combien de fois fais-tu du sport par semaine ?", options: ["0-1 fois", "2-3 fois", "4-5 fois", "6+ fois"] },
  { id: 3, question: "Comment est ton niveau d'énergie au quotidien ?", options: ["Très faible", "Faible", "Correct", "Élevé"] },
  { id: 4, question: "Comment dort-tu généralement ?", options: ["Très mal", "Mal", "Correct", "Très bien"] },
  { id: 5, question: "As-tu des problèmes de digestion ?", options: ["Souvent", "Parfois", "Rarement", "Jamais"] },
];

export default function AuditComplet() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQ].id]: answer });
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Analyse terminée !</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Ton audit gratuit est prêt. Pour accéder au rapport complet avec les 15 sections et le plan d'action personnalisé, choisis la version Premium.
          </p>
          
          <div className="card mb-8">
            <h3 className="text-xl font-bold mb-4">Ton score métabolique estimé</h3>
            <div className="stat-number text-6xl mb-2">67/100</div>
            <p className="text-gray-400">Potentiel d'amélioration : Élevé</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="py-3 px-6 border border-white/20 rounded-lg hover:bg-white/5 transition">
              Retour à l'accueil
            </Link>
            <button className="btn-primary">
              🔓 Débloquer le rapport complet — 79€
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentQ + 1}/{questions.length}</span>
            <span>{Math.round(((currentQ + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#8DFFE0] to-[#9990EA] transition-all duration-500"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="card">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {questions[currentQ].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQ].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-[#8DFFE0] hover:bg-[#8DFFE0]/5 transition-all duration-300"
              >
                <span className="text-[#8DFFE0] mr-3">{String.fromCharCode(65 + i)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {currentQ > 0 && (
          <button 
            onClick={() => setCurrentQ(currentQ - 1)}
            className="mt-6 text-gray-400 hover:text-white transition"
          >
            ← Question précédente
          </button>
        )}
      </div>
    </div>
  );
}

