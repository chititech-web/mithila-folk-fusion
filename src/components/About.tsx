import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CameraShy } from 'camerashy';
import { Globe, Landmark, Building2, MapPin, Building, Paintbrush, Leaf, Users, Award, Star } from 'lucide-react';
import { SectionDivider } from './MadhubaniBorder';

const slides = [
  { type: 'image', src: '/images/profile-headshot.jpg' },
  { type: 'image', src: '/images/eu-podium.jpg' },
  { type: 'image', src: '/images/un-outdoor.jpg' },
  { type: 'image', src: '/images/profile-office.jpg' },
  { type: 'image', src: '/images/profile-exhibition.png' },
  { type: 'video', src: '/images/profile-video.mp4' },
];

const SLIDE_INTERVAL = 4000;

const About: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };
  return (
    <section id="about" className="relative py-28 md:py-44 bg-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 rangoli-bg opacity-50" />
      
      {/* Decorative side borders */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-red via-madhubani-magenta to-madhubani-teal opacity-15" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-teal via-madhubani-magenta to-madhubani-red opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-madhubani-magenta font-cormorant text-lg tracking-[0.4em] uppercase">The Artist</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            About <span className="text-madhubani-red">Shivangi</span>
          </h2>
          <SectionDivider variant="lotus" />
          <p className="font-playfair text-lg md:text-xl text-madhubani-red italic mt-4 tracking-wide">
            "Preserving Heritage. Inspiring Tomorrow."
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Video / Slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative w-full">
              <div className="absolute -inset-4 border-2 border-madhubani-red/30" />
              <div className="absolute -inset-2 border border-madhubani-yellow/40" />
              
              <svg className="absolute -top-6 -left-6 z-10" width="40" height="40" viewBox="0 0 40 40">
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>
              <svg className="absolute -top-6 -right-6 z-10" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleX(-1)' }}>
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>
              <svg className="absolute -bottom-6 -left-6 z-10" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleY(-1)' }}>
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>
              <svg className="absolute -bottom-6 -right-6 z-10" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scale(-1)' }}>
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>

              <div className="w-full bg-madhubani-black overflow-hidden" style={{ aspectRatio: '3/4' }}>
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0 }}
                  >
                    {slide.type === 'image' ? (
                      <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                      <img
                        src={slide.src}
                        alt="Shivangi Singh"
                        className="w-full h-full object-cover"
                      />
                      </CameraShy>
                    ) : (
                      <video
                        src={slide.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-madhubani-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur-sm p-3 border border-madhubani-red/30 text-center">
                <p className="font-cinzel text-madhubani-red text-sm tracking-wider">Shivangi Vatsya Singh</p>
                <p className="font-cormorant text-madhubani-teal text-xs tracking-widest uppercase">Mithila Folk Artist</p>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-madhubani-yellow w-5' : 'bg-cream/60 hover:bg-cream'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-10"
          >
            <p className="font-cormorant text-lg md:text-xl text-madhubani-black/80 leading-relaxed">
              <span className="font-playfair text-2xl md:text-3xl text-madhubani-red font-semibold italic">Shivangi Singh</span> 
              {' '}is an Indian American contemporary Mithila (Madhubani) folk artist based in New Jersey, working under the name <strong className="text-madhubani-teal">MithilaFolkFusions</strong>. 
              Originally from the Mithilanchal region of India and raised in Jharkhand, she brings a strong cultural foundation to her practice, blending traditional storytelling with contemporary themes that speak to global audiences.
            </p>

            <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
              Her work is rooted in classical Mithila styles such as Kachni, Bharni, and Godna, while also expanding into experimental compositions on handmade paper using fine nib work and acrylics. 
              Through her art, she explores identity, migration, women's narratives, ecology, and climate resilience—transforming folk visual language into a powerful medium for cultural dialogue and social reflection.
            </p>

            {/* Achievements & Recognition */}
            <div className="space-y-8">
              <div className="text-center">
                <SectionDivider variant="lotus" />
                <h3 className="font-cinzel text-xl md:text-2xl text-madhubani-black mt-4">
                  Achievements & <span className="text-madhubani-red">Recognition</span>
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { icon: Globe, label: 'United Nations', detail: 'Exhibition, New York' },
                  { icon: Landmark, label: 'EU Headquarters', detail: 'Brussels, 2026' },
                  { icon: Building2, label: 'Gracie Mansion', detail: 'Cultural Showcase, NYC' },
                  { icon: MapPin, label: 'Times Square & Madison Ave', detail: 'Public Art, NYC' },
                  { icon: Building, label: 'FDNY Headquarters', detail: 'Exhibition, NYC' },
                  { icon: Paintbrush, label: 'Watchung Art Center', detail: '"Magnetism" Exhibition, NJ' },
                  { icon: Award, label: 'Manville Art Council', detail: 'Curated Exhibition, NJ' },
                  { icon: Leaf, label: 'Art for SDGs', detail: 'Mithila Center USA' },
                  { icon: Users, label: 'UCNJ Teen Arts Festival', detail: '1,000+ Students' },
                  { icon: Award, label: 'Women Entrepreneur', detail: 'Greater NY Chamber of Commerce' },
                  { icon: Star, label: 'Top 35 Art Influencer', detail: 'Feedspot, 2025' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group border border-madhubani-red/20 bg-cream-light p-4 hover:border-madhubani-red/40 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 flex items-center justify-center bg-madhubani-red/10 text-madhubani-red group-hover:bg-madhubani-red group-hover:text-cream transition-all duration-300">
                          <Icon size={18} />
                        </div>
                        <p className="font-playfair text-sm text-madhubani-black font-semibold leading-tight">{item.label}</p>
                        <p className="font-cormorant text-xs text-madhubani-teal">{item.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
              Through MithilaFolkFusions, she continues to preserve and evolve Mithila heritage bridging tradition and modernity while amplifying community voices through art.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10">
              {[
                { number: '1,000+', label: 'Artworks Created' },
                { number: '15+', label: 'Exhibitions' },
                { number: '500+', label: 'Happy Collectors' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-madhubani-red/20 p-6 bg-cream-light">
                  <p className="font-cinzel text-2xl md:text-3xl text-madhubani-red">{stat.number}</p>
                  <p className="font-cormorant text-sm text-madhubani-teal tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
