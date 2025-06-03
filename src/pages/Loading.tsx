'use client';

import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState('');
  const [currentAction, setCurrentAction] = useState('Initializing');
  const [dots, setDots] = useState('');

  useEffect(() => {
    const bootSequence = [
      { text: 'Checking system...', delay: 400 },
      { text: '✓ RAM: 8GB', delay: 150 },
      { text: '✓ Storage: 256GB', delay: 150 },
      { text: 'Loading modules...', delay: 300 },
      { text: '✓ React loaded', delay: 200 },
      { text: '✓ Next.js ready', delay: 200 },
      { text: 'Initializing app...', delay: 500 },
      { text: 'Finalizing...', delay: 400 },
    ];

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 700);

    let lineIndex = 0;
    let charIndex = 0;
    let currentLineText = '';
    const totalSteps = bootSequence.length;
    
    const typingInterval = setInterval(() => {
      if (lineIndex < totalSteps) {
        const { text } = bootSequence[lineIndex];
        
        if (charIndex < text.length) {
          currentLineText += text.charAt(charIndex);
          setCurrentLine(currentLineText);
          charIndex++;
        } else {
          setOutputLines(prev => [...prev, currentLineText]);
          setCurrentLine('');
          currentLineText = '';
          charIndex = 0;
          lineIndex++;
          setCurrentAction(bootSequence[lineIndex]?.text.split('...')[0] || 'Finalizing');
          setProgress(Math.min(100, Math.floor((lineIndex / totalSteps) * 100)));
        }
      } else {
        setProgress(100);
        clearInterval(typingInterval);
      }
    }, 40);

    return () => {
      clearInterval(typingInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-8 max-w-md w-full px-4">
        <div className="font-mono text-sm text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full border border-gray-200 dark:border-gray-700 shadow-sm h-64 overflow-hidden">
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            System boot initialized...
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
            <div className=" text-green-600 dark:text-green-400 font-medium">
              ✓ System ready
            </div>
          )}
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2.5 rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
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
              ? "Checking system..." 
              : progress < 60 
              ? "Loading modules..." 
              : progress < 90 
              ? "Initializing..." 
              : "Finalizing..."}
          </p>
        </div>
        
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg animate-pulse" />
          <div className="absolute w-16 h-16 border border-blue-300 dark:border-blue-700 rounded-full opacity-30" />
          <div className="absolute w-24 h-24 border border-blue-300 dark:border-blue-700 rounded-full opacity-25" />
          <div className="absolute w-32 h-32 border border-blue-300 dark:border-blue-700 rounded-full opacity-20" />
          <div className="absolute w-40 h-40 border border-blue-300 dark:border-blue-700 rounded-full opacity-15" />
          <div className="absolute w-48 h-48 border border-blue-300 dark:border-blue-700 rounded-full opacity-10" />
          
          <div className="absolute w-16 h-16 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-blue-400 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-24 h-24 animate-spin" style={{ animationDuration: '5s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-32 h-32 animate-spin" style={{ animationDuration: '7s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-40 h-40 animate-spin" style={{ animationDuration: '9s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-purple-400 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-48 h-48 animate-spin" style={{ animationDuration: '11s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-400 via-green-400 to-purple-400 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;