import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import App from "./App";

if (typeof window !== 'undefined') {
  // Right-click
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  // Drag
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') e.preventDefault();
  });
  // Copy / cut / select
  document.addEventListener('copy', (e) => e.preventDefault());
  document.addEventListener('cut', (e) => e.preventDefault());
  document.addEventListener('selectstart', (e) => e.preventDefault());
  // Keyboard: block DevTools, save, print, etc.
  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (e.ctrlKey && ['c', 'u', 's', 'p'].includes(key)) e.preventDefault();
    if (e.key === 'F12') e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) e.preventDefault();
  });
  // Mobile: block iOS gesture events (peek, pop, preview) on images
  document.addEventListener('gesturestart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('[class*="gallery"], [class*="lightbox"], [class*="portfolio"]')) {
      e.preventDefault();
    }
  }, { passive: false });
  // Mobile: block iOS 3D Touch / force touch on images
  document.addEventListener('touchforcechange', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') e.preventDefault();
  }, { passive: false });
  // Mobile: intercept long-press before contextmenu fires (Android/iOS)
  let lpTimer: ReturnType<typeof setTimeout> | null = null;
  document.addEventListener('touchstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') {
      lpTimer = setTimeout(() => e.preventDefault(), 200);
    }
  }, { passive: false });
  document.addEventListener('touchend', () => { if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; } });
  document.addEventListener('touchmove', () => { if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; } });
  // Blur page when window/tab loses focus (catches Snipping Tool, Win+Shift+S, etc.)
  const setBlurred = (blurred: boolean) => {
    document.documentElement.classList.toggle('page-blurred', blurred);
  };
  document.addEventListener('visibilitychange', () => setBlurred(document.hidden));
  window.addEventListener('blur', () => setBlurred(true));
  window.addEventListener('focus', () => setBlurred(false));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
