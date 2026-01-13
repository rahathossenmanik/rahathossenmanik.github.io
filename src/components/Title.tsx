import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Title = ({ children }: { children: string }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = children ? `${children} | Manik Hosen` : 'Manik Hosen';
  }, [children]);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <Link to='/'>
      <small>Back</small>
    </Link>
  );
};

export default Title;
