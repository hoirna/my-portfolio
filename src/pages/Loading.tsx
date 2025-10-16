import React, { useEffect, useState } from "react";

const CoffeeLoading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-black">
 
      <div className="w-24 h-24 animate-spin-slow">
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <ellipse
            cx="32"
            cy="32"
            rx="18"
            ry="28"
            fill="#6F4E37"
            stroke="#4E342E"
            strokeWidth="2"
          />
          <path
            d="M28 4 C16 20, 48 44, 36 60"
            stroke="#3E2723"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <p className="text-lg text-amber-700 dark:text-amber-300 font-semibold">
        {progress}%
      </p>

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CoffeeLoading;
