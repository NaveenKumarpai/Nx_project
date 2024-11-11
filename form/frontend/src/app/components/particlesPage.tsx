import React, { useEffect } from 'react';
import Stats from 'stats.js';

// Declare particles.js module (custom type declaration)
// declare module 'particles.js' {
//   const particlesJS: any;
//   export = particlesJS;
// }

// Extend the Window interface to recognize pJSDom as a property
declare global {
  interface Window {
    pJSDom: any;
    particlesJS: (tagId: string, options: any) => void;
  }
}

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    // Initialize Stats.js for performance monitoring (optional)
    const stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: memory
    document.body.appendChild(stats.dom);

    const countParticles = document.querySelector('.js-count-particles') as HTMLElement;

    // Initialize particles.js with configuration
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 380, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4 },
        move: { enable: true, speed: 6, direction: 'none', out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      },
      retina_detect: true
    });

    // Update particle count in the DOM
    const update = () => {
      stats.begin();
      stats.end();

      if (window.pJSDom && window.pJSDom[0].pJS.particles.array) {
        countParticles.innerText = window.pJSDom[0].pJS.particles.array.length.toString();
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    // Cleanup the particles.js initialization and stats when the component unmounts
    return () => {
      // Clean up stats and reset particle count
      document.body.removeChild(stats.dom);
      if (countParticles) {
        countParticles.innerText = '--';
      }
    };
  }, []);

  return (
    <div>
      <div id="particles-js" style={styles.particlesJs} />
      <div style={styles.countParticles}>
        <span className="js-count-particles">--</span> particles
      </div>
    </div>
  );
};

// CSS styles as TypeScript object
const styles: { [key: string]: React.CSSProperties } = {
  particlesJs: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#b61924',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  },
  countParticles: {
    background: '#000022',
    position: 'absolute',
    top: '48px',
    left: '0',
    width: '80px',
    color: '#13E8E9',
    fontSize: '0.8em',
    textAlign: 'left',
    textIndent: '4px',
    lineHeight: '14px',
    paddingBottom: '2px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    borderRadius: '0 0 3px 3px',
  },
};

export default ParticlesBackground;
