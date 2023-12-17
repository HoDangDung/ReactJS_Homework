import { useState, useEffect } from "react";
export function useSrcollY() {
  const [scrollY, setScrollY] = useState(0);

  const hannldeScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollY);
  };

  useEffect(() => {
    hannldeScrollY();
    window.addEventListener("scroll", hannldeScrollY);
    return () => {
      window.removeEventListener("scroll", hannldeScrollY);
    };
  }, []);

  return [scrollY];
}
