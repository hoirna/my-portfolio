import React, { useEffect, useState } from 'react';

const CoffeeLoading = () => {
  const [progress, setProgress] = useState(0);
  const [currentAction, setCurrentAction] = useState('Brewing coffee');
  const [dots, setDots] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const bootSequence = [
      { text: 'Grinding premium beans', delay: 600 },
      { text: 'Heating water to 96°C', delay: 800 },
      { text: 'Extracting rich aromas', delay: 700 },
      { text: 'Balancing flavor profile', delay: 650 },
      { text: 'Creating velvety crema', delay: 500 },
      { text: 'Your artisan coffee is ready', delay: 400 },
    ];

    // Animated dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 300);

    // Smooth progress animation
    let step = 0;
    const totalSteps = bootSequence.length;
    
    const progressInterval = setInterval(() => {
      if (step < totalSteps) {
        setCurrentAction(bootSequence[step].text);
        setProgress(Math.min(100, Math.floor(((step + 1) / totalSteps) * 100)));
        step++;
      } else {
        setProgress(100);
        setCurrentAction('Enjoy your perfect cup!');
        setIsComplete(true);
        clearInterval(progressInterval);
      }
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="flex flex-col items-center gap-8 max-w-md w-full px-6">
        
        {/* Coffee Cup Animation */}
        <div className="relative w-64 h-64">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 240 240" 
            className="drop-shadow-2xl"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8f9fa" />
                <stop offset="50%" stopColor="#e9ecef" />
                <stop offset="100%" stopColor="#dee2e6" />
              </linearGradient>
              
              <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6F4E37" />
                <stop offset="30%" stopColor="#5D4037" />
                <stop offset="70%" stopColor="#4E342E" />
                <stop offset="100%" stopColor="#3E2723" />
              </linearGradient>
              
              <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5F0E6" />
                <stop offset="50%" stopColor="#E6D5B8" />
                <stop offset="100%" stopColor="#D2B48C" />
              </linearGradient>
              
              <linearGradient id="cremaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D2B48C" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A68A64" stopOpacity="0.5" />
              </linearGradient>
              
              {/* Animated coffee fill mask */}
              <mask id="coffeeFillMask">
                <rect x="0" y="0" width="240" height="240" fill="white" />
                <rect 
                  x="0" 
                  y={240 - (progress * 1.8)} 
                  width="240" 
                  height={progress * 1.8} 
                  fill="black"
                  className="transition-all duration-1000 ease-out"
                />
              </mask>
              
              {/* Filter for glow effect */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Filter for crema bubbles */}
              <filter id="bubble" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="bubble" />
              </filter>
            </defs>
            
            {/* Cup Shadow */}
            <ellipse 
              cx="120" 
              cy="210" 
              rx="50" 
              ry="10" 
              fill="rgba(0,0,0,0.15)" 
              className="blur-md"
            />
            
            {/* Cup Body */}
            <path 
              d="M60 70 C75 40, 165 40, 180 70 L180 160 C175 190, 165 200, 120 200 C75 200, 65 190, 60 160 Z" 
              fill="url(#cupGradient)" 
              stroke="#ced4da" 
              strokeWidth="2"
              className="drop-shadow-lg"
            />
            
            {/* Cup Inner Rim */}
            <ellipse 
              cx="120" 
              cy="70" 
              rx="60" 
              ry="10" 
              fill="#f8f9fa" 
              stroke="#ced4da" 
              strokeWidth="1"
            />
            
            {/* Cup Inner Reflection */}
            <path 
              d="M80 80 C90 60, 150 60, 160 80 L160 90 C150 70, 90 70, 80 90 Z" 
              fill="white" 
              opacity="0.2"
            />
            
            {/* Coffee Liquid */}
            <path 
              d="M65 75 L175 75 L180 160 C175 190, 165 200, 120 200 C75 200, 65 190, 60 160 Z" 
              fill="url(#coffeeGradient)" 
              mask="url(#coffeeFillMask)"
              className="transition-all duration-1000 ease-out"
            />
            
            {/* Coffee Crema Layer */}
            {progress > 30 && (
              <path 
                d="M65 75 L175 75 L180 160 C175 190, 165 200, 120 200 C75 200, 65 190, 60 160 Z" 
                fill="url(#cremaGradient)" 
                mask="url(#coffeeFillMask)"
                opacity={Math.min(0.7, progress / 150)}
                className="transition-all duration-500 ease-out"
              />
            )}
            
            {/* Coffee Surface Foam */}
            {progress > 20 && (
              <ellipse 
                cx="120" 
                cy={240 - (progress * 1.8) + 5} 
                rx={Math.min(58, progress * 0.6)} 
                ry={Math.min(8, progress * 0.1)} 
                fill="url(#foamGradient)" 
                opacity={Math.min(0.9, progress / 80)}
                className="transition-all duration-500 ease-out"
              />
            )}
            
            {/* Coffee Bubbles */}
            {progress > 50 && (
              <g opacity={Math.min(1, progress / 100)}>
                <circle cx="100" cy={240 - (progress * 1.6)} r="3" fill="white" filter="url(#bubble)" />
                <circle cx="140" cy={240 - (progress * 1.7)} r="2" fill="white" filter="url(#bubble)" />
                <circle cx="120" cy={240 - (progress * 1.5)} r="4" fill="white" filter="url(#bubble)" />
                <circle cx="90" cy={240 - (progress * 1.4)} r="2.5" fill="white" filter="url(#bubble)" />
                <circle cx="150" cy={240 - (progress * 1.3)} r="3.5" fill="white" filter="url(#bubble)" />
              </g>
            )}
            
            {/* Handle */}
            <path 
              d="M180 90 C205 80, 220 95, 220 120 C220 145, 205 160, 180 150" 
              fill="none" 
              stroke="#ced4da" 
              strokeWidth="10" 
              strokeLinecap="round"
              className="drop-shadow-md"
            />
            <path 
              d="M180 95 C200 85, 215 100, 215 120 C215 140, 200 155, 180 145" 
              fill="none" 
              stroke="#f8f9fa" 
              strokeWidth="6" 
              strokeLinecap="round"
            />
            
            {/* Steam Animation */}
            {progress > 70 && (
              <g className="opacity-80" opacity={isComplete ? 1 : 0.7}>
                <path 
                  d="M90 40 Q95 20, 100 30 Q105 10, 110 25" 
                  fill="none" 
                  stroke="#f8f9fa" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="animate-steam"
                  style={{ animationDuration: '3s' }}
                />
                <path 
                  d="M120 35 Q125 15, 130 25 Q135 5, 140 20" 
                  fill="none" 
                  stroke="#f8f9fa" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="animate-steam"
                  style={{ animationDuration: '3.5s', animationDelay: '0.3s' }}
                />
                <path 
                  d="M150 30 Q155 10, 160 20 Q165 0, 170 15" 
                  fill="none" 
                  stroke="#f8f9fa" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="animate-steam"
                  style={{ animationDuration: '4s', animationDelay: '0.6s' }}
                />
              </g>
            )}
            
            {/* Coffee Beans Decoration */}
            {isComplete && (
              <g opacity="0.4">
                <path d="M40 60 Q45 55, 50 60 Q48 65, 40 60 Z" fill="#3E2723" transform="rotate(15 40 60)" />
                <path d="M200 80 Q205 75, 210 80 Q208 85, 200 80 Z" fill="#3E2723" transform="rotate(-20 200 80)" />
                <path d="M35 160 Q40 155, 45 160 Q43 165, 35 160 Z" fill="#3E2723" transform="rotate(45 35 160)" />
                <path d="M205 140 Q210 135, 215 140 Q213 145, 205 140 Z" fill="#3E2723" transform="rotate(-30 205 140)" />
              </g>
            )}
          </svg>
        </div>
        
        {/* Progress Information */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2">
              {isComplete ? '☕ Artisan Coffee Ready!' : '☕ Crafting Your Brew'}
            </h2>
            <p className="text-lg font-medium text-amber-700 dark:text-amber-300 flex items-center justify-center gap-2">
              <span>{currentAction}</span>
              <span className="text-amber-600 dark:text-amber-400 min-w-[1rem]">{!isComplete && dots}</span>
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Extraction</span>
              <span className="text-sm font-bold text-amber-800 dark:text-amber-200">{progress}%</span>
            </div>
            <div className="w-full bg-amber-200/50 dark:bg-amber-900/50 rounded-full h-2.5 shadow-inner overflow-hidden">
              <div 
                className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${
                  isComplete 
                    ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-green-200' 
                    : 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-amber-200'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animations to tailwind config */}
      <style jsx global>{`
        @keyframes steam {
          0% { opacity: 0; transform: translateY(0) scale(0.6); }
          50% { opacity: 0.8; transform: translateY(-15px) scale(1); }
          100% { opacity: 0; transform: translateY(-30px) scale(0.6); }
        }
        .animate-steam {
          animation: steam 3s infinite ease-out;
        }
      `}</style>
    </div>
  );
};

export default CoffeeLoading;