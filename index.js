import { useState } from "react";

export default function AsyncHook(fn, { delayMs = 0 } = {}) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handler(...args) {
    setLoading(true);
    setError(null);

    async function run() {
      try {
        return await fn(...args);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    delayMs > 0 ? setTimeout(run, delayMs) : run()
  }

  return [
    handler,
    {
      loading,
      error
    }
  ];
}
