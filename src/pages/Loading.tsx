'use client';

import React, { useEffect, useState, useCallback } from 'react';

const Loading: React.FC = () => {
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const [currentAction, setCurrentAction] = useState('Initializing');
  const [dots, setDots] = useState('');

  const bootSequence = React.useMemo(() => [
    { text: 'Checking system requirements...', delay: 300 },
    { text: '✓ RAM: 8GB available', delay: 150 },
    { text: '✓ Storage: 256GB SSD', delay: 150 },
    { text: '✓ Network: Connected', delay: 150 },
    { text: '✓ Next.js v14.1.0 loaded', delay: 200 },
    { text: '✓ TypeScript v5.0.0 loaded', delay: 200 },
    { text: 'Finalizing startup sequence...', delay: 500 },
  ], []);

  const updateProgress = useCallback((lineIndex: number) => {
    const totalSteps = bootSequence.length;
    const newProgress = Math.min(100, Math.floor((lineIndex / totalSteps) * 100));
    setProgress(newProgress);
    
    if (newProgress < 30) {
      setCurrentAction('Checking system');
    } else if (newProgress < 60) {
      setCurrentAction('Loading modules');
    } else if (newProgress < 90) {
      setCurrentAction('Initializing');
    } else {
      setCurrentAction('Finalizing');
    }
  }, [bootSequence]);

  useEffect(() => {
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 400);

    // Simulate boot sequence
    let lineIndex = 0;
    let charIndex = 0;
    let currentLineText = '';
    let timeoutId: NodeJS.Timeout;
    
    const typeNextCharacter = () => {
      if (lineIndex < bootSequence.length) {
        const { text } = bootSequence[lineIndex];
        
        if (charIndex < text.length) {
          currentLineText += text.charAt(charIndex);
          setCurrentLine(currentLineText);
          charIndex++;
          timeoutId = setTimeout(typeNextCharacter, 40);
        } else {
          // Move to next line
          setOutputLines(prev => [...prev, currentLineText]);
          setCurrentLine('');
          currentLineText = '';
          charIndex = 0;
          lineIndex++;
          updateProgress(lineIndex);
          timeoutId = setTimeout(typeNextCharacter, bootSequence[lineIndex - 1]?.delay || 100);
        }
      } else {
        // Final completion
        setProgress(100);
      }
    };

    typeNextCharacter();

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timeoutId);
    };
  }, [bootSequence, updateProgress]);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-8 max-w-md w-full px-4">
        {/* Terminal output with virtualization for performance */}
        <div className="font-mono text-sm text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full border border-gray-200 dark:border-gray-700 shadow-sm h-64 overflow-y-auto">
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            System boot sequence initialized...
          </div>
          
          {outputLines.map((line, index) => (
            <div key={index} className="mb-1 flex">
              <span className="text-green-500 dark:text-green-400 mr-2">$</span>
              <span>{line}</span>
            </div>
          ))}
          
          {currentLine && (
            <div className="mb-1 flex">
              <span className="text-green-500 dark:text-green-400 mr-2">$</span>
              <span>{currentLine}</span>
              <span className="inline-block w-1 h-4 ml-1 bg-green-500 animate-pulse" />
            </div>
          )}
          
          {progress === 100 && (
            <div className="mt-2 text-green-600 dark:text-green-400 font-medium">
              ✓ System ready
            </div>
          )}
        </div>
        
        {/* Optimized progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2.5 rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%`, willChange: 'width' }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 flex items-center">
            {currentAction}{dots}
            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              {progress}%
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {progress < 30 
              ? "Checking system requirements..." 
              : progress < 60 
              ? "Loading application modules..." 
              : progress < 90 
              ? "Initializing services..." 
              : "Finalizing startup..."}
          </p>
        </div>
        
        {/* Optimized animated visualization */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Static base circles */}
          <div className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg animate-pulse" />
          {[16, 24, 32, 40, 48].map((size) => (
            <div 
              key={size}
              className={`absolute w-${size} h-${size} border border-blue-300 dark:border-blue-700 rounded-full opacity-${100 - size}`}
            />
          ))}
          
          {/* Optimized spinning dots */}
          {[16, 24, 32, 40, 48].map((size, index) => {
            const colors = ['bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'];
            const duration = [3, 5, 7, 9, 11][index];
            const dotSize = index === 4 ? 'w-3 h-3' : 'w-2 h-2';
            const gradient = index === 4 ? 'bg-gradient-to-br from-blue-400 via-green-400 to-purple-400' : '';
            
            return (
              <div 
                key={`dot-${size}`}
                className={`absolute w-${size} h-${size} animate-spin`} 
                style={{ animationDuration: `${duration}s` }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`${dotSize} ${gradient || colors[index]} rounded-full shadow-sm`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Loading;