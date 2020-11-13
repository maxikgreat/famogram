import { useEffect, FC } from 'react';
import Router from 'next/router';

interface RedirectProps {
  url: string,
}

export const Redirect: FC<RedirectProps> = ({ url }) => {
  useEffect(() => {
    Router.push(url);
  }, []);

  return null;
}