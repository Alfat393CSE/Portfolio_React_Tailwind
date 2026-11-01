import { useEffect, useState } from "react";
export function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash);
  useEffect(() => {
    const navigate = () => {
      setRoute(window.location.hash);
    };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (route.startsWith('#/projects/')) window.scrollTo({ top: 0, behavior: 'instant' });
      else if (route) document.getElementById(route.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [route]);
return route;
}
