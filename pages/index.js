import { useState } from 'react';

import { Title } from '../styles/homeStyle';

export default function Home() {
  const [show, setShow] = useState(false);
  return <Title>{show ? 'show page' : 'not page'}</Title>;
}
