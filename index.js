import { useState } from "react";

export default function Loadable(fn, { delayMs = 0 } = {}) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [res, setRes] = useState(null);

  async function handler(...args) {
    setLoading(true);
    setError(null);
    setRes(null);

    async function run() {
      try {
        const res = await fn(...args);
        setRes(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    delayMs > 0 ? setTimeout(run, delayMs) : run()
  }

  return [
    {
      loading,
      error,
      res
    },
    handler
  ];
}
