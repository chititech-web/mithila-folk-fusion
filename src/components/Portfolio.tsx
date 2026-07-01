import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';
import Footer from './Footer';

const portfolioWorks = [
  {
    id: 1,
    src: '/images/resonance.jpeg',
    title: 'Resonance',
    category: 'Environment & Identity',
    description: 'A female face merged with Earth — one half scarred by factories, trains, and dead fish; the other lush with forests, elephants, and lotuses. A Mithila meditation on consequence and hope.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 2,
    src: '/images/bodhi-udaya.jpeg',
    title: 'Bodhi Udaya',
    category: 'Spirituality',
    description: 'Buddha\'s enlightenment beneath the Bodhi tree, rendered in Kachni and Bharni styles. Mandala arches, rhythmic linework, and fine-nib detail frame the moment of awakening.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 3,
    src: '/images/mythocircle.jpeg',
    title: 'Mythocircle',
    category: 'Mythology & Folklore',
    description: 'A Godna-inspired turtle whose shell becomes a cosmic mandala. Raja Sahlesh and his brothers ride the sacred animal as concentric circles carry Mithila\'s oral folklore and geometric precision.',
    medium: 'Godna Art',
    dimensions: '—',
  },
  {
    id: 4,
    src: '/images/echoes-beneath-branches.jpeg',
    title: 'Echoes Beneath the Branches',
    category: 'Nature & Community',
    description: 'A black-and-white Mithila painting of a tree transformed into a birdhouse sanctuary. A pond with ducks and lotuses below — intricate linework exploring home, community, and coexistence.',
    medium: 'Mithila Folk Art — Black & White',
    dimensions: '—',
  },
  {
    id: 5,
    src: '/images/one-earth-many-voices.jpeg',
    title: 'One Earth, Many Voices',
    category: 'Climate & Culture',
    description: 'A Mithila-inspired mandala of Earth ringed by international flags and diverse faces. Birds, fish, elephants, and vines represent biodiversity — a call for climate resilience through cultural unity.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 6,
    src: '/images/echoes-of-exile.jpeg',
    title: 'Echoes of Exile',
    category: 'Mythology & Heritage',
    description: 'Rama, Sita, and Lakshman\'s fourteen-year forest exile from the Ramayana, depicted in vibrant Mithila style. Floral motifs, birds, and intricate borders set the enchanted backdrop of their journey.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Simple header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-madhubani-red/10">
        <div className="h-1 w-full bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-madhubani-black/60 hover:text-madhubani-red transition-colors font-playfair text-sm tracking-wider"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="font-cinzel text-lg text-madhubani-red tracking-wider">Portfolio</h1>
          <div className="w-24" />
        </div>
      </header>

      {/* Portfolio content */}
      <section className="relative pt-32 pb-28 md:pt-40 md:py-44 bg-cream overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 rangoli-bg opacity-30" />

        {/* Decorative side borders */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-yellow via-madhubani-red to-madhubani-magenta opacity-15" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-magenta via-madhubani-red to-madhubani-yellow opacity-15" />

        <div className="relative px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-madhubani-magenta font-cormorant text-lg tracking-[0.4em] uppercase">Full Collection</span>
            <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
              Portfolio
            </h2>
            <SectionDivider variant="lotus" />
            <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto mt-4">
              A curated selection of original Madhubani paintings — each piece tells a story rooted in
              mythology, nature, and the feminine divine of the Mithila tradition
            </p>
          </motion.div>

          {/* Single column portfolio */}
          <div className="space-y-20 md:space-y-28">
            {portfolioWorks.map((work, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-2/3">
                    <div className="relative group">
                      {/* Decorative frame */}
                      <div className="absolute -inset-4 border border-madhubani-red/15 pointer-events-none" />
                      <div className="absolute -inset-2 border border-madhubani-yellow/20 pointer-events-none" />

                      {/* Corner ornaments */}
                      <svg className="absolute -top-5 -left-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40">
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -top-5 -right-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleX(-1)' }}>
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -bottom-5 -left-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleY(-1)' }}>
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -bottom-5 -right-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scale(-1)' }}>
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>

                      <CameraShy mode="blur" blur="20px" sensitivity="balanced" style={{ display: 'block' }}>
                      <img
                        src={work.src}
                        alt={work.title}
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      </CameraShy>

                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-madhubani-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={`w-full md:w-1/3 ${isEven ? 'md:pl-4' : 'md:pr-4'}`}>
                    <div className="space-y-6 max-w-lg">
                      {/* Category */}
                      <span className="inline-block font-playfair text-xs tracking-[0.3em] uppercase text-madhubani-magenta border border-madhubani-magenta/30 px-3 py-1">
                        {work.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-cinzel text-2xl md:text-3xl text-madhubani-black leading-tight">
                        {work.title}
                      </h3>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-0.5 bg-madhubani-red" />
                        <svg width="12" height="12" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="2" fill="none" stroke="#E8A317" strokeWidth="0.8" />
                          <circle cx="6" cy="6" r="0.8" fill="#C41E7F" />
                        </svg>
                      </div>

                      {/* Description */}
                      <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
                        {work.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 pt-4 border-t border-madhubani-red/10">
                        <p className="font-playfair text-sm text-madhubani-black/50">
                          <span className="text-madhubani-teal">Medium:</span> {work.medium}
                        </p>
                        <p className="font-playfair text-sm text-madhubani-black/50">
                          <span className="text-madhubani-teal">Dimensions:</span> {work.dimensions}
                        </p>
                      </div>

                      {/* CTA */}
                      <Link
                        to="/#commission"
                        className="inline-block mt-4 px-6 py-3 border border-madhubani-red text-madhubani-red font-playfair text-sm tracking-wider hover:bg-madhubani-red hover:text-cream transition-all duration-300"
                      >
                        Inquire About This Piece
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
