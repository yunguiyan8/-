
import React, { useState } from 'react';
import Experience from './components/Experience';
import { TreeMorphState } from './types';
import { Sparkles, Trees, Boxes, Wand2 } from 'lucide-react';

const App: React.FC = () => {
  const [morphState, setMorphState] = useState<TreeMorphState>(TreeMorphState.SCATTERED);

  const toggleState = () => {
    setMorphState(prev => 
      prev === TreeMorphState.SCATTERED ? TreeMorphState.TREE_SHAPE : TreeMorphState.SCATTERED
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#01160d]">
      {/* 3D Scene */}
      <Experience morphState={morphState} />

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 md:p-12">
        {/* Header */}
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tighter text-[#D4AF37] opacity-90 drop-shadow-lg">
            ARIX <span className="font-light italic text-emerald-100/50">Signature</span>
          </h1>
          <p className="text-[#D4AF37]/60 text-sm md:text-base tracking-[0.2em] uppercase">
            Interactive Holiday Experience
          </p>
        </header>

        {/* Footer Controls */}
        <footer className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6 pointer-events-auto">
          <div className="flex flex-col gap-1 max-w-xs">
            <h2 className="text-[#D4AF37] text-lg font-medium">Digital Craftsmanship</h2>
            <p className="text-emerald-100/40 text-xs leading-relaxed">
              Witness the convergence of generative geometry and cinematic light. 
              Toggle the architectural state of the Arix Tree.
            </p>
          </div>

          <button
            onClick={toggleState}
            className="group relative flex items-center gap-4 px-8 py-4 bg-emerald-950/40 border border-[#D4AF37]/30 hover:border-[#D4AF37] backdrop-blur-md transition-all duration-500 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative flex items-center gap-3">
              {morphState === TreeMorphState.SCATTERED ? (
                <>
                  <Trees className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">Assemble Tree</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">Scatter Elements</span>
                </>
              )}
            </div>
          </button>
        </footer>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 p-12 opacity-30 pointer-events-none hidden md:block">
        <div className="text-[#D4AF37] text-right font-serif text-8xl leading-none">24</div>
        <div className="text-[#D4AF37] text-right text-xs tracking-[0.5em] uppercase mt-2">December Edition</div>
      </div>
    </div>
  );
};

export default App;
