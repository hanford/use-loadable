import { useState } from 'react'

export default async function useAsyncFunction(fn) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handler(...args) {
    setLoading(true);
    setError(null);

    try {
      return await fn(...args);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return [
    handler,
    {
      loading,
      error
    }
  ];
}

