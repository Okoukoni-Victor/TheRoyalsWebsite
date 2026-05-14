"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

/**
 * TextReveal component that animates text reveal on scroll using GSAP and SplitType.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The text content to reveal.
 * @param {string} [props.className] - Optional CSS classes for the container.
 * @param {string} [props.as="p"] - The HTML element to render (e.g., "p", "h1", "h2").
 * @param {string} [props.start="top 85%"] - ScrollTrigger start position.
 * @param {string} [props.end="bottom 70%"] - ScrollTrigger end position.
 */
export default function TextReveal({ 
  children, 
  className, 
  as: Component = "h3",
  start = "top 85%",
  end = "bottom 70%"
}) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: 'words' });
    
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: textRef.current,
        start: start,
        end: end,
        scrub: true,
      },
      opacity: 0.1,
      stagger: 0.1,
      ease: "power2.out"
    });

    return () => split.revert();
  }, { scope: textRef });

  return (
    <Component ref={textRef} className={className}>
      {children}
    </Component>
  );
}
