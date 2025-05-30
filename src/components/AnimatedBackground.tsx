import React from 'react';
import { Squares } from "@/components/ui/squares-background";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0D0D0D]"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-80">
        <Squares 
          direction="diagonal"
          speed={0.05}
          squareSize={60}
          borderColor="rgba(255, 255, 255, 0.08)"
          hoverFillColor="rgba(0, 255, 136, 0.08)"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/40 via-[#0D0D0D]/20 to-[#0D0D0D]/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7F00FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF88]/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
