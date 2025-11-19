'use client'

import { useState } from 'react'
import { FiDownload, FiCheck, FiChevronDown, FiChevronRight } from 'react-icons/fi'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-sage mb-4">Mary's Digital Lab</p>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
              Harmony Health<br />Blueprint
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              A minimalist-luxury digital guide for busy lives. Evidence-informed practices to align brain, heart, body, and beauty—one sustainable shift at a time.
            </p>
            <button className="bg-charcoal text-cream px-10 py-4 rounded-full hover:bg-charcoal/90 transition-all inline-flex items-center gap-2 text-lg font-light tracking-wide shadow-lg">
              <FiDownload className="text-xl" />
              Download Your Blueprint
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-white/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-charcoal">What's Inside</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-2xl text-sage" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-charcoal">Daily Harmony Ritual</h3>
              <p className="text-charcoal/70 leading-relaxed">Simple morning and evening practices to center your day</p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-2xl text-sage" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-charcoal">Movement & Breath</h3>
              <p className="text-charcoal/70 leading-relaxed">Micro-practices that fit into the busiest schedule</p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-2xl text-sage" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-charcoal">Three Signature Tonics</h3>
              <p className="text-charcoal/70 leading-relaxed">Quick recipes with powerful health benefits</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Core Essentials</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Hydration and sleep optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Six core herbs with evidence-backed benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Guided relaxation program (daily & evening)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Optional audio bundle for deeper practice</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Planning Tools</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>7-day mini plan with daily actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Printable weekly planner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Shopping checklist for easy prep</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span>Journal prompts & progress tracker</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Content Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-12 text-charcoal">Preview the Guide</h2>

          <div className="space-y-4">
            {/* Daily Harmony Ritual */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleSection('ritual')}
                className="w-full p-6 flex items-center justify-between hover:bg-sage/5 transition-colors"
              >
                <h3 className="font-serif text-2xl text-charcoal">Daily Harmony Ritual</h3>
                {activeSection === 'ritual' ? <FiChevronDown className="text-2xl" /> : <FiChevronRight className="text-2xl" />}
              </button>
              {activeSection === 'ritual' && (
                <div className="px-6 pb-6 space-y-4 text-charcoal/80">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Morning (5 minutes)</h4>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Hydrate: Glass of warm water with lemon</li>
                      <li>Breathe: 3 deep breaths (4-7-8 pattern)</li>
                      <li>Move: 5 gentle stretches</li>
                      <li>Affirm: One intention for the day</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Evening (5 minutes)</h4>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Reflect: Three moments of gratitude</li>
                      <li>Breathe: 5 calming breaths</li>
                      <li>Prepare: Herbal tea or tonic</li>
                      <li>Wind down: 10 minutes screen-free</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Signature Tonics */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleSection('tonics')}
                className="w-full p-6 flex items-center justify-between hover:bg-sage/5 transition-colors"
              >
                <h3 className="font-serif text-2xl text-charcoal">Three Signature Tonics</h3>
                {activeSection === 'tonics' ? <FiChevronDown className="text-2xl" /> : <FiChevronRight className="text-2xl" />}
              </button>
              {activeSection === 'tonics' && (
                <div className="px-6 pb-6 space-y-6 text-charcoal/80">
                  <div className="border-l-4 border-sage pl-4">
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Golden Glow Elixir</h4>
                    <p className="mb-2 italic">Benefits: Anti-inflammatory, skin radiance, digestion</p>
                    <p className="text-sm">1 cup warm plant milk, 1 tsp turmeric, ½ tsp cinnamon, pinch black pepper, honey to taste. Whisk and enjoy warm.</p>
                  </div>
                  <div className="border-l-4 border-sage pl-4">
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Calm Mind Brew</h4>
                    <p className="mb-2 italic">Benefits: Stress relief, sleep support, nervous system balance</p>
                    <p className="text-sm">Chamomile, lavender, ashwagandha, honey. Steep 5-7 minutes. Perfect evening ritual.</p>
                  </div>
                  <div className="border-l-4 border-sage pl-4">
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Energy Awakening Tonic</h4>
                    <p className="mb-2 italic">Benefits: Mental clarity, sustained energy, antioxidants</p>
                    <p className="text-sm">Green tea, fresh ginger, lemon, matcha powder, touch of maple syrup. Blend or steep hot.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Core Herbs */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleSection('herbs')}
                className="w-full p-6 flex items-center justify-between hover:bg-sage/5 transition-colors"
              >
                <h3 className="font-serif text-2xl text-charcoal">Six Core Herbs</h3>
                {activeSection === 'herbs' ? <FiChevronDown className="text-2xl" /> : <FiChevronRight className="text-2xl" />}
              </button>
              {activeSection === 'herbs' && (
                <div className="px-6 pb-6 grid md:grid-cols-2 gap-4 text-charcoal/80">
                  <div className="p-4 bg-sage/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-1">Ashwagandha</h4>
                    <p className="text-sm">Adaptogen for stress, cortisol balance, sleep quality</p>
                  </div>
                  <div className="p-4 bg-sage/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-1">Turmeric</h4>
                    <p className="text-sm">Anti-inflammatory, joint health, cognitive support</p>
                  </div>
                  <div className="p-4 bg-sage/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-1">Holy Basil (Tulsi)</h4>
                    <p className="text-sm">Stress resilience, immune support, mental clarity</p>
                  </div>
                  <div className="p-4 bg-sage/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-1">Chamomile</h4>
                    <p className="text-sm">Relaxation, digestive calm, gentle sleep aid</p>
                  </div>
                  <div className="p-4 bg-sage/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-1">Ginger</h4>
                    <p className="text-sm">Digestion, circulation, anti-nausea, warming</p>
                  </div>
                  <div className="p-4 bg-sage/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-1">Lavender</h4>
                    <p className="text-sm">Nervous system calm, sleep enhancement, aromatherapy</p>
                  </div>
                </div>
              )}
            </div>

            {/* 7-Day Plan */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleSection('plan')}
                className="w-full p-6 flex items-center justify-between hover:bg-sage/5 transition-colors"
              >
                <h3 className="font-serif text-2xl text-charcoal">7-Day Mini Plan</h3>
                {activeSection === 'plan' ? <FiChevronDown className="text-2xl" /> : <FiChevronRight className="text-2xl" />}
              </button>
              {activeSection === 'plan' && (
                <div className="px-6 pb-6 space-y-3 text-charcoal/80">
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 1</span>
                    <span>Foundation: Morning hydration + evening gratitude journal</span>
                  </div>
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 2</span>
                    <span>Breath: Add 4-7-8 breathing to morning and evening ritual</span>
                  </div>
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 3</span>
                    <span>Movement: 10-minute morning stretch routine</span>
                  </div>
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 4</span>
                    <span>Nourish: Try Golden Glow Elixir in the afternoon</span>
                  </div>
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 5</span>
                    <span>Evening: Calm Mind Brew + guided relaxation audio</span>
                  </div>
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 6</span>
                    <span>Integration: Full morning and evening rituals combined</span>
                  </div>
                  <div className="flex gap-4 p-3 bg-cream/50 rounded-lg">
                    <span className="font-semibold text-charcoal w-24">Day 7</span>
                    <span>Reflect: Review progress, set intentions for week ahead</span>
                  </div>
                </div>
              )}
            </div>

            {/* Relaxation Program */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleSection('relaxation')}
                className="w-full p-6 flex items-center justify-between hover:bg-sage/5 transition-colors"
              >
                <h3 className="font-serif text-2xl text-charcoal">Guided Relaxation Program</h3>
                {activeSection === 'relaxation' ? <FiChevronDown className="text-2xl" /> : <FiChevronRight className="text-2xl" />}
              </button>
              {activeSection === 'relaxation' && (
                <div className="px-6 pb-6 space-y-4 text-charcoal/80">
                  <div className="p-4 border-l-4 border-sage">
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Morning Energizer (5 min)</h4>
                    <p>Body scan → Breath activation → Positive visualization → Intention setting</p>
                  </div>
                  <div className="p-4 border-l-4 border-sage">
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Midday Reset (3 min)</h4>
                    <p>Shoulder release → 4-7-8 breathing → Mental clarity pause</p>
                  </div>
                  <div className="p-4 border-l-4 border-sage">
                    <h4 className="font-semibold text-lg mb-2 text-charcoal">Evening Wind-Down (10 min)</h4>
                    <p>Progressive muscle relaxation → Gratitude reflection → Sleep preparation breathing</p>
                  </div>
                  <div className="mt-4 p-4 bg-gold/10 rounded-lg">
                    <p className="text-sm italic">⭐ Optional audio bundle includes professionally recorded guided sessions with calming background music</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journal & Progress */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-12 text-charcoal">Track Your Journey</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Journal Prompts</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">→</span>
                  <span>What energy do I want to cultivate today?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">→</span>
                  <span>Which practice made me feel most alive?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">→</span>
                  <span>What small shift can I sustain long-term?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">→</span>
                  <span>How is my body communicating with me?</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Progress Trackers</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">✓</span>
                  <span>Daily ritual completion checkboxes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">✓</span>
                  <span>Hydration and sleep quality logs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">✓</span>
                  <span>Energy and mood tracking scales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage mt-1">✓</span>
                  <span>Weekly reflection summaries</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-cream p-8 rounded-2xl text-center">
            <h3 className="font-serif text-2xl mb-3 text-charcoal">Printable Resources Included</h3>
            <p className="text-charcoal/70 mb-6">Weekly planner, shopping checklist, and tracking sheets optimized for printing</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white rounded-full text-charcoal/70">Letter & A4 formats</span>
              <span className="px-4 py-2 bg-white rounded-full text-charcoal/70">Print-friendly design</span>
              <span className="px-4 py-2 bg-white rounded-full text-charcoal/70">Minimalist layout</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6 text-charcoal">The Philosophy</h2>
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
            No overwhelming diets. No impossible standards. Just one small, sustainable shift at a time.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            The Harmony Health Blueprint is designed for real life—busy schedules, limited time, and the need for genuine results. Each practice is evidence-informed, battle-tested, and refined for simplicity. You don't need to overhaul your life. You just need to begin.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-white/50 to-sage/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl mb-6 text-charcoal">Start Your Journey</h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Download your complete Harmony Health Blueprint and begin aligning brain, heart, body, and beauty today.
          </p>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-3xl mb-4 text-charcoal">What You'll Receive</h3>
            <ul className="text-left space-y-3 text-charcoal/80 mb-8">
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>Complete 60+ page minimalist PDF guide</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>Guided relaxation program (daily & evening)</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>Three signature tonic recipes with prep guides</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>7-day mini plan with actionable steps</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>Printable weekly planner & shopping checklist</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>Journal prompts & progress tracking tools</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheck className="text-sage flex-shrink-0" />
                <span>Optional audio bundle upgrade available</span>
              </li>
            </ul>

            <button className="w-full bg-charcoal text-cream px-10 py-5 rounded-full hover:bg-charcoal/90 transition-all inline-flex items-center justify-center gap-3 text-lg font-light tracking-wide shadow-lg">
              <FiDownload className="text-2xl" />
              Download Complete Blueprint
            </button>

            <p className="text-sm text-charcoal/60 mt-4">Luxury design optimized for all screens</p>
          </div>

          <p className="text-sm text-charcoal/60">
            From Mary's Digital Lab · Crafted for sustainable wellness
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl mb-3">Mary's Digital Lab</p>
          <p className="text-cream/70 text-sm">Minimalist luxury for modern wellness</p>
          <div className="mt-6 pt-6 border-t border-cream/20">
            <p className="text-cream/60 text-xs">© 2025 Mary's Digital Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
