// src/hooks/useScrollToHash.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // We use a small timeout to ensure the MDX content 
      // is fully rendered in the DOM before searching for the ID
      const timeout = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms is usually enough for MDX to mount

      return () => clearTimeout(timeout);
    }
  }, [hash]);
};

export default useScrollToHash;