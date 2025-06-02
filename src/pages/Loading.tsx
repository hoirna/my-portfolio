'use client';

import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [dots, setDots] = useState('');
  const codeText = 'const app = initialize();';
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < codeText.length) {
        setDisplayedText(codeText.slice(0, index + 1));
        index++;
        setProgress(Math.floor((index / codeText.length) * 100));
      } else {
        clearInterval(typingInterval);
      }
    }, 80); 

    // Progress dots animation
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 400);

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
        <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          <div 
            className="h-1 bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        
        <div className="font-mono text-lg text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg w-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center">
            <span className="text-blue-500 dark:text-blue-400 mr-2">$</span>
            <span>{displayedText}</span>
            <span className={`inline-block w-1 h-6 ml-1 bg-blue-500 ${displayedText.length === codeText.length ? 'opacity-0' : 'animate-pulse'}`} />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Initializing{dots}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Loading application resources. This should only take a moment.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 dark:border-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Loading;