"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradientAnimation = ({
  containerClassName,
  className,
  children,
  size = "100%",
  firstColor = "59, 130, 246",
  secondColor = "147, 51, 234",
  thirdColor = "59, 130, 246",
  gradientBackgroundStart = "rgb(59, 130, 246)",
  gradientBackgroundEnd = "rgb(147, 51, 234)",
  blendingValue = "hard-light",
}: {
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
  size?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  blendingValue?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-transparent",
        containerClassName
      )}
      style={{
        "--first-color": `rgba(${firstColor}, 1)`,
        "--second-color": `rgba(${secondColor}, 1)`,
        "--third-color": `rgba(${thirdColor}, 1)`,
      } as React.CSSProperties}
    >
      {/* Base gradient background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-transparent",
          className
        )}
        style={{
          background: `linear-gradient(to bottom, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
          opacity: 0.3,
        }}
      />
      
      {/* Animated orbs container */}
      <div className="absolute inset-0">
        <div
          className="absolute w-[1200px] h-[1200px] animate-gradient-orb-1"
          style={{
            background: `radial-gradient(circle at center, var(--first-color) 0%, transparent 70%)`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.9,
            mixBlendMode: "screen",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-[1200px] h-[1200px] animate-gradient-orb-2"
          style={{
            background: `radial-gradient(circle at center, var(--second-color) 0%, transparent 70%)`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.9,
            mixBlendMode: "screen",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-[1200px] h-[1200px] animate-gradient-orb-3"
          style={{
            background: `radial-gradient(circle at center, var(--third-color) 0%, transparent 70%)`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.9,
            mixBlendMode: "screen",
            willChange: "transform",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}; 