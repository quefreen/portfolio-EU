"use client"; // 👈 necessário no Next 13+ (App Router)

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypingEffect() {
  const el = useRef<HTMLSpanElement>(null); // onde o texto será inserido
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "tecnologia.",
        "design.",
        "inovação.",
        "pão de queijo.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      // cleanup na desmontagem do componente
      typed.current?.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="text-[4rem] leading-[120%] text-[#919191] font-medium tracking-tight;
    font-family: var(--font-schibstedGrotesk), sans-serif"
      style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
    />
  );
}
