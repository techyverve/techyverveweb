"use client";

import { useEffect, useRef, useState } from "react";

const codeLines: string[] = [
  '<span class="k">const</span> <span class="f">studio</span> <span class="p">=</span> <span class="k">new</span> <span class="f">TechyVerve</span>()',
  "",
  '<span class="k">studio</span>.<span class="f">stack</span>(<span class="s">"react"</span>, <span class="s">"node"</span>, <span class="s">"aws"</span>)',
  '<span class="k">studio</span>.<span class="f">process</span>(<span class="s">"agile"</span>)',
  "",
  '<span class="c">// ship, don\'t just design</span>',
  '<span class="k">await</span> <span class="k">studio</span>.<span class="f">build</span>({',
  '&nbsp;&nbsp;<span class="p">web</span>: <span class="k">true</span>,',
  '&nbsp;&nbsp;<span class="p">mobile</span>: <span class="k">true</span>,',
  '&nbsp;&nbsp;<span class="p">backend</span>: <span class="k">true</span>',
  "})",
];

export default function Typewriter() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const timeout = setTimeout(() => {
        setVisibleLines(codeLines.length);
        setDone(true);
      }, 0);
      return () => clearTimeout(timeout);
    }

    let li = 0;
    const interval = setInterval(() => {
      li += 1;
      setVisibleLines(li);
      if (li >= codeLines.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="editor-body">
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <div key={i}>
          <span className="ln">{i + 1}</span>
          <span
            dangerouslySetInnerHTML={{
              __html: i === visibleLines - 1 && done ? line + '<span class="cursor"></span>' : line,
            }}
          />
        </div>
      ))}
    </div>
  );
}
