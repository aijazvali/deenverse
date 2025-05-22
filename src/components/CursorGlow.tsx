import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl pointer-events-none z-50 transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
      }}
    ></div>
  );
};

export default CursorGlow;
