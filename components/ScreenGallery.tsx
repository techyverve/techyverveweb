"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Screen } from "@/lib/projects";

/** Real app screenshots: a large framed view, thumbnails to switch, click to open full size. */
export default function ScreenGallery({ name, screens }: { name: string; screens: Screen[] }) {
  const desktop = screens.filter((s) => !s.mobile);
  const phones = screens.filter((s) => s.mobile);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<Screen | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (zoom && !d.open) d.showModal();
    if (!zoom && d.open) d.close();
  }, [zoom]);

  // Auto-advance until the visitor picks a screen themselves
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || desktop.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % desktop.length), 4500);
    return () => clearInterval(t);
  }, [auto, desktop.length]);

  const current = desktop[active];

  return (
    <div className="gallery">
      {current && (
        <div className="gal-main">
          <div className="gal-frame">
            <div className="gal-bar" aria-hidden="true">
              <i></i><i></i><i></i>
              <span>{name}</span>
            </div>
            <button type="button" className="gal-shot" onClick={() => setZoom(current)} aria-label={`Open full size: ${current.caption}`}>
              {desktop.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes="(max-width: 960px) 100vw, 900px"
                  className={i === active ? "on" : ""}
                  priority={i === 0}
                />
              ))}
            </button>
          </div>
          <p className="gal-caption" aria-live="polite">{current.caption}</p>
          {desktop.length > 1 && (
            <div className="gal-thumbs" role="tablist" aria-label="Screens">
              {desktop.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={i === active ? "on" : ""}
                  onClick={() => { setActive(i); setAuto(false); }}
                >
                  <Image src={s.src} alt="" width={s.width} height={s.height} sizes="200px" />
                  <span>{s.caption.split(" — ")[0]}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {phones.length > 0 && (
        <div className="gal-phones">
          {phones.map((p) => (
            <figure key={p.src} className="gal-phone">
              <button type="button" className="phone-frame" onClick={() => setZoom(p)} aria-label={`Open full size: ${p.caption}`}>
                <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="260px" />
              </button>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <dialog ref={dialog} className="gal-zoom" onClose={() => setZoom(null)} onClick={() => setZoom(null)}>
        {zoom && (
          <>
            <Image src={zoom.src} alt={zoom.alt} width={zoom.width} height={zoom.height} sizes="100vw" />
            <p>{zoom.caption}</p>
            <button type="button" className="gal-close" aria-label="Close">×</button>
          </>
        )}
      </dialog>
    </div>
  );
}
