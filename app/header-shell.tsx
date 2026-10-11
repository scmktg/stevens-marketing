"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#expertise", label: "Expertise" },
  { href: "#model", label: "Our Model" },
  { href: "#contact", label: "Contact" },
];

export default function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const panel = document.getElementById("fullscreen-navigation");
      const focusable = Array.from(panel?.querySelectorAll<HTMLElement>('button, a[href]') ?? []);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}>
      {children}
      <button ref={triggerRef} className="nav-trigger" type="button" aria-label="Open navigation" aria-controls="fullscreen-navigation" aria-expanded={open} onClick={() => setOpen(true)}>
        <span className="nav-trigger-bars" aria-hidden="true"><i/><i/></span><span>Menu</span>
      </button>
      {open && <div id="fullscreen-navigation" className="fullscreen-navigation" role="dialog" aria-modal="true" aria-label="Main navigation">
        <div className="fullscreen-nav-top"><span className="fullscreen-nav-label">Navigation</span><button ref={closeRef} type="button" className="nav-close" onClick={() => setOpen(false)} aria-label="Close navigation"><span aria-hidden="true">×</span> Close</button></div>
        <nav className="fullscreen-nav-links" aria-label="Main navigation">
          {links.map((link, i) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><small>0{i + 1}</small>{link.label}<span aria-hidden="true">↗</span></a>)}
        </nav>
        <p className="fullscreen-nav-foot">Independent thinking. Commercial outcomes.</p>
      </div>}
    </header>
  );
}
