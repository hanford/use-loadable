import { useState } from "react";

export default function AsyncHook(fn, { delayMs = 1000 } = {}) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handler(...args) {
    setLoading(true);
    setError(null);

    setTimeout(async () => {
      try {
        return await fn(...args);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }, delayMs);
  }

  return [
    handler,
    {
      loading,
      error
    }
  ];
}
