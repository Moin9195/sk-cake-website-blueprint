
import React from 'react';
import { cn } from '@/lib/utils';

type WavesDividerProps = {
  className?: string;
  fillColor?: string;
  waveType?: 'simple' | 'layered' | 'curved';
};

const WavesDivider = ({
  className,
  fillColor = "#fff",
  waveType = 'layered'
}: WavesDividerProps) => {
  // Different wave patterns
  const wavePatterns = {
    simple: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          fill={fillColor} 
          fillOpacity="1" 
          d="M0,64L60,64C120,64,240,64,360,53.3C480,43,600,21,720,32C840,43,960,85,1080,90.7C1200,96,1320,64,1380,48L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        />
      </svg>
    ),
    layered: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          fill={fillColor} 
          fillOpacity="0.2"
          d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
        <path 
          fill={fillColor} 
          fillOpacity="0.4"
          d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
        <path 
          fill={fillColor}
          d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>
    ),
    curved: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          fill={fillColor}
          d="M0,0L48,5.3C96,11,192,21,288,37.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>
    )
  };

  return (
    <div className={cn("w-full h-24 md:h-32 overflow-hidden -mt-1", className)}>
      {wavePatterns[waveType]}
    </div>
  );
};

export default WavesDivider;
