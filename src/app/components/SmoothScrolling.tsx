"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
const SmoothScrolling: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
