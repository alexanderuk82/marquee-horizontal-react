import React from "react";
import { cn } from "../../lib/utils";
import "./marquee.css";

/**
 * Marquee component for creating scrolling content
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.reverse - Whether to reverse the animation direction
 * @param {boolean} props.pauseOnHover - Whether to pause the animation on hover
 * @param {React.ReactNode} props.children - Child elements
 * @param {boolean} props.vertical - Whether to scroll vertically
 * @param {number} props.repeat - Number of times to repeat the children
 * @returns {JSX.Element} Marquee component
 */
export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  // Definir estilos de animación directamente
  const containerStyle = {
    display: "flex",
    flexDirection: vertical ? "column" : "row",
    overflow: "hidden",
    padding: "8px",
    gap: "1rem",
    "--duration": "40s",
    "--gap": "1rem"
  };

  const itemStyle = (index) => ({
    display: "flex",
    flexDirection: vertical ? "column" : "row",
    flexShrink: 0,
    justifyContent: "space-around",
    gap: "1rem",
    animation: `${vertical ? "marquee-vertical" : "marquee"} var(--duration) linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
    animationPlayState: pauseOnHover ? "paused" : "running"
  });

  return (
    <div
      {...props}
      className={cn("marquee-container", className)}
      style={containerStyle}
      onMouseEnter={pauseOnHover ? (e) => {
        e.currentTarget.querySelectorAll('.marquee-item').forEach(item => {
          item.style.animationPlayState = 'paused';
        });
      } : undefined}
      onMouseLeave={pauseOnHover ? (e) => {
        e.currentTarget.querySelectorAll('.marquee-item').forEach(item => {
          item.style.animationPlayState = 'running';
        });
      } : undefined}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="marquee-item"
            style={itemStyle(i)}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
