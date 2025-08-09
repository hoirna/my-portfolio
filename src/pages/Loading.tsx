import React, { useEffect, useState } from "react";

const CoffeeLoading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 300);
    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      {/* Coffee Cup */}
      <div className="w-48 h-48 mb-6">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 240 240"
          className="drop-shadow-2xl"
        >
          <defs>
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
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cup Body */}
          <path
            d="M60 70 C75 40, 165 40, 180 70 L180 160 C175 190, 165 200, 120 200 C75 200, 65 190, 60 160 Z"
            fill="url(#cupGradient)"
            stroke="#ced4da"
            strokeWidth="2"
          />

          {/* Rim */}
          <ellipse
            cx="120"
            cy="70"
            rx="60"
            ry="10"
            fill="#f8f9fa"
            stroke="#ced4da"
            strokeWidth="1"
          />

          {/* Coffee Liquid */}
          <path
            d="M65 75 L175 75 L180 160 C175 190, 165 200, 120 200 C75 200, 65 190, 60 160 Z"
            fill="url(#coffeeGradient)"
          />

          {/* Steam */}
          <g className="opacity-80">
            <path
              d="M90 40 Q95 20, 100 30 Q105 10, 110 25"
              fill="none"
              stroke="#f8f9fa"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow)"
              className="animate-steam"
            />
            <path
              d="M120 35 Q125 15, 130 25 Q135 5, 140 20"
              fill="none"
              stroke="#f8f9fa"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow)"
              className="animate-steam"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              d="M150 30 Q155 10, 160 20 Q165 0, 170 15"
              fill="none"
              stroke="#f8f9fa"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow)"
              className="animate-steam"
              style={{ animationDelay: "0.6s" }}
            />
          </g>
        </svg>
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
        Brewing Coffee{dots}
      </h2>

      <style jsx global>{`
        @keyframes steam {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.6);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-15px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.6);
          }
        }
        .animate-steam {
          animation: steam 3s infinite ease-out;
        }
      `}</style>
    </div>
  );
};

export default CoffeeLoading;
