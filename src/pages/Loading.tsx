'use client';

import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [dots, setDots] = useState('');
  const codeText = 'const app = initialize();';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < codeText.length) {
        setDisplayedText(codeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); 

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

        
        <div className="font-mono text-lg text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg w-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center">
            <span className="text-blue-500 dark:text-blue-400 mr-2">$</span>
            <span>{displayedText}</span>
            <span className={`inline-block w-1 h-6 ml-1 bg-blue-500 ${displayedText.length === codeText.length ? 'opacity-0' : 'animate-pulse'}`} />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Loading Please Wait!{dots}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Loading application resources. This should only take a moment.
          </p>
        </div>
        
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute w-8 h-8 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 rounded-full shadow-lg animate-pulse" />
          <div className="absolute w-16 h-16 border border-gray-300 dark:border-gray-600 rounded-full opacity-30" />
          <div className="absolute w-24 h-24 border border-gray-300 dark:border-gray-600 rounded-full opacity-25" />
          <div className="absolute w-32 h-32 border border-gray-300 dark:border-gray-600 rounded-full opacity-20" />
          <div className="absolute w-40 h-40 border border-gray-300 dark:border-gray-600 rounded-full opacity-15" />
          <div className="absolute w-48 h-48 border border-gray-300 dark:border-gray-600 rounded-full opacity-10" />
          
          <div className="absolute w-16 h-16 animate-spin" style={{ animationDuration: '1.5s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-24 h-24 animate-spin" style={{ animationDuration: '2.2s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-32 h-32 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-40 h-40 animate-spin" style={{ animationDuration: '4s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-sm" />
            </div>
          </div>
          
          <div className="absolute w-48 h-48 animate-spin" style={{ animationDuration: '5.5s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-gradient-to-br from-orange-400 via-yellow-600 to-red-700 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;