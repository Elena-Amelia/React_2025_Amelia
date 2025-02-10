import { ReactNode, useState } from 'react';

export default function ErrorButton(): ReactNode {
  const [isError, setError] = useState(false);

  function handleClick() {
    setError(true);
  }

  if (isError) {
    throw new Error('Something went wrong...');
  }

  return <button onClick={handleClick}>Generate Error</button>;
}
