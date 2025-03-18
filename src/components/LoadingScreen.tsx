'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20"></div>
        <div className="relative flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <div className="text-white text-lg font-medium animate-pulse">Loading...</div>
        </div>
      </div>
    </div>
  );
} 